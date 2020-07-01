/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

import { SidebarNav } from './../../src/sidebar-nav';
import { Pages } from './../../src/pages';

test('All document files should be mapped properly', () => {
    const mockdata = require('../data/set1.json');
    const sidebar = new SidebarNav();
    const actual = sidebar.groups(new Pages(mockdata.pages));
    Object.keys(mockdata.groups).forEach(key => {
        expect(actual).toHaveProperty(key);
        expect(actual[key].length).toBe(mockdata.groups[key].length);

        if(typeof mockdata.groups[key][0] == 'object' && 'children' in mockdata.groups[key][0]){
            expect(actual[key][0]).toHaveProperty('children');
            expect(actual[key][0].children.length).toBe(mockdata.groups[key][0].children.length);
        }else if(typeof mockdata.groups[key][0] == 'string'){
            // root fallback item '/' is a list of string paths
            expect(actual[key].length).toBe(mockdata.groups[key].length);
        }
    });
});