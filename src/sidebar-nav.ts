/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

import { Pages } from "./pages";
import { TreeNode, Tree } from "./tree";

/**
 * The main Sidebar Navigation class that accepts a list of Pages paths as they come
 * from Vuepress Plugin Context (ctx.pages), converts them nested Tree of urls and then
 * groups them in the format expected by the Default Theme Sidebar.
 *
 */
export class SidebarNav {

    /**
     * Groups the page urls into multiple sidebars of sidebar groups
     * as defined in https://vuepress.vuejs.org/theme/default-theme-config.html#multiple-sidebars
     * and https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar-groups
     *
     * @param pages A formatted list of pages
     */
    public groups(pages: Pages): { [key: string]: SidebarGroup[] } {
        const tree = this.convertToTree(pages);
        const groups = tree
            .map(n => this.convertToGroups(n))
            .flat()
            .reduce((keyValueGroups, group) => {
                keyValueGroups[group._id.replace(/\/$/, '') + '/'] = [group];
                return keyValueGroups;
            }, {});
        // handle ther root fallback case by adding the list of all urls at the end
        groups['/'] = pages.paths();
        return groups;
    }

    /**
     * Creates a tree structure of the Pages
     * that allows easy creation of groups and subgroups
     *
     * @param pages The formatted list of Pages and their urls
     */
    private convertToTree(pages: Pages): Tree {
        const tree = new Tree();
        pages
            .all()
            .forEach(page => tree.addNode(page.path, page));
        return tree;
    }

    /**
     * Creates sidebar groups as defined in
     * https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar-groups
     *
     */
    private convertToGroups(node: TreeNode): SidebarGroup[] {
        const groups = [];
        if (node.children.size > 0) {
            groups.push(this.convertToGroup(node));

            // create a separate group for each of the children and their children
            node.children
                .forEach(child => groups.push(...this.convertToGroups(child)));
        }
        groups.sort((a, b) => a._id < b._id ? 1 : -1);
        return groups;
    }

    /**
     * Creates a sidebar group as defined in
     * https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar-groups
     *
     * @param node A Node instance created by the Tree
     */
    private convertToGroup(node: TreeNode): SidebarGroup {

        // no children means node is converted to a simple group item
        if (node.children.size === 0) {
            return this.createGroupItem(node.value.path, node.value.title);
        }

        // all node children must also be converted to groups
        const children = [...node.children.values()].map(child => {
            return this.convertToGroup(child);
        });

        // handle case when (nested) directories dont have a Readme.md file
        // and as a result the parent node doesnt have a value or a title
        // Instead infer the title from the parent dir.
        if (!node.value) {
            return this.createGroup(node.path, this.extracTitleFromDir(node.path), children);
        }

        // create a group per directory using the dir name as title
        // and add the Readme.md of the dir as the first item of the group
        children.unshift(
            this.createGroupItem(node.value.path, node.value.title)
        );
        const title = this.extracTitleFromDir(node.path);
        return this.createGroup(node.value.path, title, children);
    }

    /**
     * A sidebar Group consists of a title and does not have a path
     * so that when it is clicked it does not redirect to a specific url
     * but instead will toggle the display of the group children
     *
     * @param _id A unique id for the group (the path can also be used)
     * @param title The group name that will be displayed
     * @param children The group items
     */
    private createGroup(_id: string, title: string, children: SidebarGroup[]): SidebarGroup {
        return {
            _id,
            title,
            children
        };
    }

    /**
     * A sidebar group item is a child of a sidebar group.
     * The difference with the group is that it always have a path, and as such
     * when clicked it will redirect to the url defined in the path parameter.
     * The group item can have children (and it will behave like a Group) but
     * it doesn't make sense for it to have, as long as Group does the same job.
     * The vuepress default theme sidebar however always expect a children property.
     *
     * @param path The url that the group item will point to when clicked
     * @param title The name that will be displayed on the sidebar for this item
     */
    private createGroupItem(path: string, title: string): SidebarGroup {
        return {
            _id: path,
            path,
            title,
            children: []
        };
    }

    /**
     * Extract the directory from the path and format it
     * so it can be used as a title
     *
     * @param path A directory path
     */
    private extracTitleFromDir(path: string): string {
        const dirname = String(path.split('/').pop());
        return dirname.replace(/-|_|\./, ' ')
            .split(' ')
            .map(item => item.charAt(0).toUpperCase() + item.slice(1))
            .join(' ')
    }
}

interface SidebarGroup {
    _id: string,
    path?: string;
    title: string;
    children: SidebarGroup[]
}