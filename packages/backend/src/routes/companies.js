const express = require("express");
const router = express.Router();
const companiesGateway = require("../gateways/companies");

router.get("/", function (_, res) {
  const companies = companiesGateway.list();

  res.json({ data: { companies } });
});

module.exports = router;
