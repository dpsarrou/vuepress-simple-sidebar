# Folder structure

Zero or minimal configuration is a real thing. But what is not understood immediately
is that to allow no configuration, some assumptions must be made. Those assumptions
are what lead to an *opinionated* usage and also the reason why we have so many
standards and frameworks that in essense do the exact same thing. I have tried
to make direct the option as little as possible but its hard to capture all usecases
right from the start.

## Include a Readme.md in each folder

Have a main `Readme.md` file for each folder. This will allow you to add
a short description for each folder, but also can be used as an `Overview` page.
This is needed by the plugin to be able to show a page if you navigate to that
folder's url, or else you will get a 404.

## Sorting order

The sort order is assumed to be alphabetically based on the filename.
If you want a document to appear before an other, you can try a numbering system
in the filename, for example:

    1-known-issues.md
    2-disclaimer.md
