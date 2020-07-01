/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

import { Tree } from "./../../src/tree";
import { Pages } from "./../../src/pages";

test('Should create an object tree out of properly organized documentation files', () => {
    const mockdata = require('../data/set1.json');
    const pages = new Pages(mockdata.pages);
    const tree = new Tree();
    pages
        .all()
        .forEach(page => tree.addNode(page.path, page));
    const actual = tree.toObject()[0];
    const expected = mockdata.tree[0];

    Object.keys(expected).forEach((key: any) => {
        expect(actual).toHaveProperty(key);
        expect(actual.children.length).toBe(expected.children.length);
    });
});