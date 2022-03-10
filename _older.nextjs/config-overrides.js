const path = require('path');

const {
  override,
  addBabelPlugin,
  addWebpackModuleRule,
} = require('customize-cra');

const moduleResolver = [
  'babel-plugin-module-resolver',
  {
    root: ['./src/'],
    alias: {
      '@': './src',
    },
  },
];

const fontLoad = {
  rules: [
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      ],
    },
  ],
};

module.exports = override(
  addBabelPlugin(moduleResolver),
  // addWebpackModuleRule(fontLoad)
);

// const path = require('path');

// const {
//   override,
//   addBabelPlugin,
//   // addWebpackModuleRule,
//   addWebpackAlias,
// } = require('customize-cra');

// const plugins = [
//   'babel-plugin-module-resolver',
//   {
//     root: path.resolve(__dirname, 'src'),
//     alias: {
//       test: './test',
//       '~': path.resolve(__dirname, 'src'),
//     },
//   },
// ];

// const moduleResolver = [
//   'babel-plugin-module-resolver',
//   {
//     root: ['./src/'],
//     alias: {
//       '~': './src',
//     },
//   },
// ];

// const aliasName = {
//   ['~']: path.resolve(__dirname, 'src'),
//   ['@ui']: path.resolve(__dirname, 'src', 'ui'),
//   ['@src']: path.resolve(__dirname, 'src'),
// };

// const fontLoad = {
//   rules: [
//     {
//       test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             outputPath: 'fonts/',
//           },
//         },
//       ],
//     },
//   ],
// };

// module.exports = override(
//   addBabelPlugin(moduleResolver),
//   // addBabelPlugin(plugins),
//   // addWebpackModuleRule(fontLoad)
//   // addWebpackAlias(aliasName),
// );
