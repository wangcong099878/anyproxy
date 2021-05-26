//const AnyProxy = require('anyproxy');
const AnyProxy = require('./proxy');
const options = {
    port: 18001,
    //rule: require('myRuleModule'),
    webInterface: {
        enable: true,
        webPort: 8992
    },
    throttle: 10000,
    forceProxyHttps: false,
    wsIntercept: false, // 不开启websocket代理
    silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { /* */ });
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();

//when finished
proxyServer.close();



/*
const AnyProxy = require('anyproxy');
const options = {
  port: 8001,
  rule: require('myRuleModule'),
  webInterface: {
    enable: true,
    webPort: 8002,
    wsPort: 8003,
  },
  throttle: 10000,
  forceProxyHttps: false,
  silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => {  });
proxyServer.on('error', (e) => {  });
proxyServer.start();

//when finished
proxyServer.close();
*/