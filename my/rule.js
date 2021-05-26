// rule.js
module.exports = {
    // 模块介绍
    summary: 'my customized rule for AnyProxy',
    // 发送请求前拦截处理
    * beforeSendRequest(requestDetail) {
        /* ... */
        //requestDetail  参数如下
        /*
{
  protocol: 'http',
  url: 'http://anyproxy.io/',
  requestOptions: {
    hostname: 'anyproxy.io',
    port: 80,
    path: '/',
    method: 'GET',
    headers: {
      Host: 'anyproxy.io',
      'Proxy-Connection': 'keep-alive',
      'User-Agent': '...'
    }
  },
  requestData: '...',
  _req: { }
    }
         */
    },
    // 发送响应前处理
    * beforeSendResponse(requestDetail, responseDetail) { /* ... */
    },
    // 是否处理https请求
    * beforeDealHttpsRequest(requestDetail) { /* ... */
    },
    // 请求出错的事件
    * onError(requestDetail, error) { /* ... */
    },
    // https连接服务器出错
    * onConnectError(requestDetail, error) { /* ... */
    }
};

//anyproxy --rule rule.js