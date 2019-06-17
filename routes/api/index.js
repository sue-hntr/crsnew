const router = require("express").Router();
const userRoutes = require("./users");
const appointmentRoutes = require("./appointments");

// Book routes
router.use("/users", userRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
