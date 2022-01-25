const express = require("express");
const pckg = require("../../package.json");
const router = express.Router();

router.get("/", function (_, res) {
  res.json({ name: pckg.name, version: pckg.version });
});

module.exports = router;
