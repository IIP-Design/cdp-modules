const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const babel = require( './babel' );
const css = require( './css-modules' );
const paths = require( './paths' );
const plugins = require( './plugins' );
const utils = require( './utils' );

module.exports = ( env, argv ) => {
  const cssModuleNames = css.getCssModuleNames( argv.mode );

  return {
    devServer: {
      contentBase: paths.builds,
      historyApiFallback: true,
    },
    entry: utils.setEntry( env ),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babel.setBabelConfig( cssModuleNames ),
          },
        },
        {
          include: /\.module\.(sa|sc|c)ss$/,
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: cssModuleNames,
                  mode: 'local',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          exclude: /\.module\.(sa|sc|c)ss$/,
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          ],
        },
        {
          test: [
            /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/,
          ],
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]',
            },
          },
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
      ],
    },
    output: {
      filename: argv.mode === 'development' ? 'dev-[name].js' : 'gpalab-[name].js',
      path: paths.builds,
    },
    plugins: plugins.loadPlugins( argv.mode, env ),
    resolve: {
      extensions: [
        '*', '.js', '.jsx',
      ],
    },
    target: 'web',
  };
};
