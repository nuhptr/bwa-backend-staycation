const router = require("express").Router();
const adminController = require("../controllers/AdminController");

router.get("/dashboard", adminController.viewDashboard);

module.exports = router;
