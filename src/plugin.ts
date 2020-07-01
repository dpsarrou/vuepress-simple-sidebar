/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

import { SidebarNav } from "./sidebar-nav";
import { Pages } from "./pages";

const pluginName = 'vuepress-simple-sidebar';
module.exports = ({ }, ctx: any) => ({
    name: pluginName,
    async enhanceAppFiles() {
        const sidebar = new SidebarNav();
        const groups = sidebar.groups(new Pages(ctx.pages));
        return {
            name: pluginName,
            content: `export default ({ siteData, options }) => { siteData.themeConfig.sidebar = ${JSON.stringify(groups)}; siteData.themeConfig.sidebarDepth = 2 }`
        }
    }
})