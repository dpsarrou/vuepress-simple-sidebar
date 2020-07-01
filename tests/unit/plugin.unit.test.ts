/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

test('Plugin should be instantiated', () => {
    const handler = require('../../src/plugin');
    const sidebarPlugin = handler({}, { pages: [] });
    expect(sidebarPlugin).not.toBeUndefined();
})

test('Plugin should report the correct name', () => {
    const handler = require('../../src/plugin');
    const sidebarPlugin = handler({}, { pages: [] });
    expect(sidebarPlugin).toHaveProperty('name');
    expect(sidebarPlugin.name).toBe('vuepress-simple-sidebar');
})

test('Plugin should expose an enhanceAppFiles function', () => {
    const handler = require('../../src/plugin');
    const sidebarPlugin = handler({}, { pages: [] });
    expect(sidebarPlugin).toHaveProperty('enhanceAppFiles');
    expect(typeof sidebarPlugin.enhanceAppFiles).toBe('function');
})

test('Plugin enhanceAppFiles() should return name and content', async () => {
    const handler = require('../../src/plugin');
    const sidebarPlugin = handler({}, { pages: [] });
    const result = await sidebarPlugin.enhanceAppFiles();
    expect(result).toHaveProperty('name');
    expect(result.name).toBe('vuepress-simple-sidebar');
    expect(result).toHaveProperty('content');
})