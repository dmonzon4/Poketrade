const express = require("express");
const Offer = require("../models/Offer.model")
const router = express.Router();
const Card = require("../models/Card.model")

// GET "/card/sell"
router.get("/sell", async (req, res, next) => {

    try {
      const response = await Offer.findById(req.params.offerId).populate("user")
      const allCard = await Card.find().select({name:1})
      console.log(req.params.offerId)
      console.log(response)
  
      res.render("auth/sell.hbs", {
        allCard
      })
    } catch(err) {
      next(err)
    }
  })

  router.post("/sell", async (req, res, next) => {
    console.log(req.body);
  
    const {card, quantity, price} =
      req.body
    const seller = req.session.user._id
  
    if (card === "" || quantity === "" || price === "") {
      console.log("Rellena todos los campos");
  
      res.render("auth/sell.hbs", {
        errorMessage: "Todos los campos deben estar llenos",
        card,
        quantity,
        price,
      });
      return;
    } 
  
    try {
  
      await Offer.create({
        card,
        seller,
        quantity,
        price,
      });
      res.redirect("/offer/sell"); 
    } catch (err) {
      next(err)
    }
  })

  module.exports = router;