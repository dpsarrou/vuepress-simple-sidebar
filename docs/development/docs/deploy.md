# Deploying the documentation site

The rendered documentatipon is deployed to Github pages.
The process has been automated and can be run with:

    npm run docs:deploy

If you are interested in the details, the deploy process has been defined in
[package.json](./../../../package.json) `docs:deploy` script and looks like this:

1. Compile the typescript codebase
2. Run the test suite
3. Build the vuepress documentation
4. Create a new git repo in the `docs/.vuepress/dist` folder and commit all created files
5. Push the repo to `master:gh-pages` branch
