module.exports = {
  siteName: 'Build Info by JFrog',
  siteDescription: 'Build-info is all the information collected by the build agent which includes details about the build. The build-info includes the list of project modules, artifacts, dependencies, environment variables and more. When using one of the JFrog clients to build the code, the client can collect the build-info and publish it to Artifactory. When the build-info is published to Artifactory, all the published details become visible in the Artifactory UI.',
  siteUrl: 'https://www.buildinfo.org',
  pathPrefix: '',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
