/* eslint-disable @typescript-eslint/no-var-requires */
// @ref https://github.com/arackaf/customize-cra

const globImporter = require('node-sass-glob-importer');
const {
  override,
  addBundleVisualizer,
  adjustStyleLoaders,
} = require('customize-cra');

module.exports = override(
  // Bundle Analyzer
  // @ref https://github.com/arackaf/customize-cra/blob/master/api.md#addbundlevisualizeroptions-behindflag--false
  addBundleVisualizer({}, true),

  // Sass Loader
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: 'sass-loader',
        options: {
          // @ref https://www.npmjs.com/package/node-sass-glob-importer
          // [CAUTION] use sass-loader@7.x.x to use 'importer'!!
          importer: globImporter(),
        },
      });
    }
  }),
);
