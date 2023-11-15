const express = require('express');
const router = express.Router();
const Card = require("../models/Card.model.js")

// /* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

//GET "/"
router.get("/", (req, res, next) => {
  Card.find()
  .select({name: 1, description: 1, image: 1})
  .then((response ) => {
    console.log(response)
    res.render("index.hbs", {
      allCards: response
    })
  })
  .catch((err) => {
    next(err)
  })
})


const authRouter = require("./auth.routes.js")
router.use("/auth", authRouter)

const profileRouter = require("./profile.routes.js")
router.use("/profile", profileRouter)

const cardRouter = require("./cards.routes.js")
router.use("/stock", cardRouter)

const offerRouter = require("./offer.routes.js")
router.use("/offer", offerRouter)

module.exports = router;
