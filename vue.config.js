/* eslint-disable */
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/morney-website/'
    : '/',
  lintOnSave: false,
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/assets/icons');
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end() // 包含 icons 目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader') //消除svg自带的颜色
      .tap(options => ({ ...options, plugins: [{ removeAttrs: { attrs: 'fill' } }] })).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }]);
    config.module.rule('svg').exclude.add(dir);
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'text-color': '#333',
            'primary-color': '#333',
            'link-color': 'inherit',
            'font-size-base': '16px',
            'body-background': '#f5f5f5'
          },
          javascriptEnabled: true,
        },
      },
    },
  },
}
