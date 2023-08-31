const _ = require("lodash");
const config = require("./backend-config");
const serviceConfiguration = require("./service-configuration");

module.exports = _.assign(config, serviceConfiguration);
