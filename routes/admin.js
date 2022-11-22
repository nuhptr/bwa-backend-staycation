const router = require("express").Router();

const dashboardController = require("../controllers/DashboardController");
const categoryController = require("../controllers/CategoryController");
const itemController = require("../controllers/ItemController");
const bankController = require("../controllers/BankController");
const bookingController = require("../controllers/BookingController");

router.get("/dashboard", dashboardController.viewDashboard);

// using category controller
router.get("/category", categoryController.viewCategory);
router.post("/category", categoryController.addCategory);
router.put("/category", categoryController.editCategory);
router.delete("/category/:id", categoryController.deleteCategory);

router.get("/bank", bankController.viewBank);

router.get("/item", itemController.viewItem);

router.get("/booking", bookingController.viewBooking);

module.exports = router;
