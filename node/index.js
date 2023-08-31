const config = require("./config");
const restService = require("./rest-services");
const express = require("express");
const Cors = require("cors");
const SERVICE_ENDPOINT = config.serviceEndpointPrefix;

const app = express();

// Body parser
app.use(express.json());
app.use(Cors());

// Mounting routes
app.use(`${SERVICE_ENDPOINT}`, restService.router);

const port = 4040;
app.listen(port, () => {
  console.log("server listening on port", +port);
});
