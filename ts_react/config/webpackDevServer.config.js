'use strict';

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const paths = require('./paths');
const fs = require('fs');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    disableHostCheck:
      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    // Enable gzip compression of generated files.
    compress: true,
    // 使WebpackDevServer自己的日志静音，因为它们通常没有用。此设置仍会显示编译警告和错误。
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    // 默认情况下，来自“ contentBase”的文件不会触发页面重新加载。
    watchContentBase: true,
    // 启用热重载服务器。
    // 它将为WebpackDevServer客户端提供/ sockjs-node /端点，以便它可以了解文件何时更新。
    // WebpackDevServer客户端是Webpack开发配置中的入口点。
    // 请注意，当前仅热更改对CSS的更改。
    // JS更改将刷新浏览器。
    hot: true,
    // 告诉WebpackDevServer使用与配置中指定相同的“根”路径非常重要。
    // 在开发中，我们始终从/提供服务。
    publicPath: '/',
    // WebpackDevServer默认情况下嘈杂，因此我们发出自定义消息，而不是通过上面的`compiler.hooks [...]。tap`调用来侦听编译器事件。
    quiet: true,
    // 据报道，这避免了某些系统上的CPU过载。
    // 不忽略https://github.com/facebook/create-react-app/issues/293
    // src /
    // node_modules以支持绝对导入https://github.com/facebook/create-react-app/issues/1065
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc),
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https',
    host,
    overlay: false,
    historyApiFallback: {
      // 带点的路径仍应使用历史记录后备。
      // See https://github.com/facebook/create-react-app/issues/387.
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    before(app, server) {
      if (fs.existsSync(paths.proxySetup)) {
        // This registers user provided middleware for proxy reasons
        require(paths.proxySetup)(app);
      }

      // 这使我们可以从webpack获取源内容以进行错误覆盖
      app.use(evalSourceMapMiddleware(server));
      // 这使我们可以从运行时错误覆盖中打开文件。
      app.use(errorOverlayMiddleware());

      // 该服务工作者文件实际上是一个“无操作”文件，它将重置为同一host：port组合注册的所有以前的服务工作者。
      // 如果在开发缓存中使用相同的主机和端口，我们将在开发中这样做。
      // https://github.com/facebook/create-react-app/issues/2272#issuecomment-302832432
      app.use(noopServiceWorkerMiddleware());
    },
  };
};
