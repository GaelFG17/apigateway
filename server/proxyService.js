const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");

class ProxyService {
    static createProxy(target){
        return createProxyMiddleware({
            target : target,
            chanceOrigin : true,
            pathRewrite : (path, req) => path.replace(req.baseUrl, ""),
            headers: {
                "Content-Type": "application/json"
            },
            on: {
                proxyReq: fixRequestBody,
            },
        })
    }
}

module.exports = ProxyService