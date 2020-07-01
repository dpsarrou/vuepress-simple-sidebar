/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

import { sep } from 'path';

/**
 * A structure to page url links to be used by the sidebar navigation.
 * It accepts a list of pages as they come from Vuepress (ctx.pages)
 * and cleans and formats them.
 */
export class Pages {

    private pages: Page[] = [];

    constructor(pages: VuepressPage[]) {
        this.pages = this.format(pages);
    }

    /**
     * Formats the paths to match and convert them to relative urls that the
     * default theme sidebar expects
     * (eg. remove extensions, remove readme names, prefix with /, etc..)
     */
    private format(pages: VuepressPage[]): Page[] {
        const data = pages
            .filter(page => page.relativePath)
            .map(p => ({
                path: '/' + p.relativePath
                    .replace(sep, '/') // normalize the paths
                    .replace(/readme\.md$/i, '') // vuepress doesnt need filenames
                    .replace('.md', ''), // vuepress doesnt need extensions
                title: p.title,
            }));
        data.sort((a, b) => a.path > b.path ? 1 : -1);
        return data;
    }

    public all(): Page[] {
        return this.pages;
    }

    /**
     * Return a list of only the Page's paths.
     * Useful to add as a fallback route to '/' as defined in Vuepress
     * default theme sidebar documentation.
     */
    public paths(): string[] {
        return this.pages.map(p => p.path);
    }
}

interface VuepressPage {
    relativePath: string;
    title: string;
}

interface Page {
    path: string;
    title: string;
}