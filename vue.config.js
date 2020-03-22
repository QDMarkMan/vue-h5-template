/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Webpack config].
 *-------------------------------------------------------------------------------------------- */
const path = require('path')
const { getAllAlias } = require('./config/utils')
const reslove = dir => path.join(__dirname, dir)
const alias = getAllAlias({
  'vue$': 'vue/dist/vue.esm.js',
  '@': reslove('src')
})
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // path.resolve(__dirname, './src/styles/global.scss')
      ]
    })
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,
  devServer: {
    port: process.env.port || 7001
  },
  configureWebpack: {
    name: 'vue-h5-template',
    resolve: {
      extensions: ['.js', '.json', '.vue', '.scss'],
      alias
    }
  },
  // theme
  css: {
    loaderOptions: {
      // stylus: {
      //   'resolve url': true,
      //   'import': [
      //     './src/styles/theme'
      //   ]
      // },
      scss: {
        prependData: `@import "@/styles/variables.scss"; @import "@nutui/nutui/dist/styles/index.scss";`
      }
    }
  },
  // build
  /* pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }, */
  chainWebpack: config => {
    // source map
    config.when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-module-eval-source-map'))
    // auto styles
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}
