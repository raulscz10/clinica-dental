const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const customerRouter = require("./routes/customer");
const doctorRouter = require("./routes/doctor");
const authRouter = require("./routes/auth");
const infoRouter = require("./routes/info");

/* home page */
router.use("/", indexRouter);

/* Doctor */
router.use("/api/doctor", doctorRouter);

/* Customer */
router.use("/api/customer", customerRouter);

/* Admin */
router.use("/api/admin", adminRouter);

/* Auth */
router.use("/auth", authRouter);

/* Info */
router.use("/info", infoRouter);

module.exports = router;
