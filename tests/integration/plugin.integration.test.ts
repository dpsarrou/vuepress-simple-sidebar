/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

import { execSync } from "child_process";

test('Vuepress should complete the build successfully when using the plugin', () => {
    execSync("tsc");
    execSync("NODE_ENV=production npx vuepress build docs --dest ./tests/out/docs --silent");
})