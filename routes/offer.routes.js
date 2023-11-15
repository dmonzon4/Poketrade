const express = require("express");
const Offer = require("../models/Offer.model")
const router = express.Router();

// GET "/card/:cardId/sell"
router.get("/:cardId/sell", async (req, res, next) => {

    try {
      const response = await Offer.findById(req.params.offerId).populate("user")
      console.log(req.params.offerId)
      console.log(response)
  
      res.render("auth/sell.hbs", {
        oneOffer: response
      })
    } catch(err) {
      next(err)
    }
  })

  module.exports = router;