# JFrog Build Info
## Setup
Clone the repo and run `yarn` in the root folder.
## Starting the dev Server
Run `yarn dev`. The default port would be `8080` and you can visit your local instance at [http://localhost:8080/](http://localhost:8080/)
## Troubleshooting
If you got the following output:
> gridsome build
Unknown command build
Usage: gridsome <command> [options]
You may need to install [gridsome](https://gridsome.org/docs/) with the following command:
yarn global add @gridsome/cli
In case [gh-pages](https://yarnpkg.com/package/gh-pages) is missing:
npm install gh-pages --save-dev
## Editing homepage
Go to `src/pages/Index.vue` and edit the content between the `<Layout></Layout>` tags. Make sure everything compiles well in the dev server before deploying to Github Pages
## Deploy to Github Pages
first push your changes to the repo, then `yarn deploy`

