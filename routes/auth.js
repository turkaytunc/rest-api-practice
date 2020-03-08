const express = require("express");
const User = require("../models/user");
const { body } = require("express-validator/check");
const authController = require("../controllers/auth");

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject("E-mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isEmpty()
      .isLength({ min: 5 }),
    body("name")
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 5 })
  ],
  authController.signup
);

module.exports = router;
