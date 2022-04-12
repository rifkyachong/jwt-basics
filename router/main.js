const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controller/main");
const authentication = require("../middleware/authentication");

router.post("/login", login);
router.get("/dashboard", authentication, dashboard);

module.exports = router;
