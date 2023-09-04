const express = require("express");
const app = express();

const config = require("./config");
const SERVICE_ENDPOINT = config.serviceEndpointPrefix;

const Cors = require("cors");

const restService = require("./rest-service");

// BODY PARSER
app.use(express.json());
app.use(Cors());

// MOUNTING ROUTES
app.use(SERVICE_ENDPOINT, restService.router);
console.log("🚀 ~ file: index.js:17 ~ SERVICE_ENDPOINT:", SERVICE_ENDPOINT)

const port = process.env.PORT ? process.env.Port : 4042;
app.listen(port, () => {
  console.log("Server listening on port", port);
});
