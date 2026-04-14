const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// LOGIN
router.post("/login", authController.login);

// PROTECTED
router.get("/protected", authMiddleware, authController.protected);

module.exports = router;