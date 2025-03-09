const ProxyService = require("../server/proxyService.js");
const routes = require("express").Router();
const {services} = require("../config/services.js")

services.forEach(({url, path}) => {
    routes.use(path, ProxyService.createProxy(url));
})



module.exports = routes