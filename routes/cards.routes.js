const express = require("express");
const Card = require("../models/Card.model");
const router = express.Router();

router.get("/stock", (req, res, next) => {
  res.render("auth/stock.hbs");
});

// POST "/auth/patata" => recibir los datos de las cartas y crealo en la DB
router.post("/stock", async (req, res, next) => {
  console.log(req.body);

  const {name, description, rarity, noSeries, language, image } =
    req.body

  if (name === "" || description === "" || rarity === "" || noSeries === "" || language === "" || image === "" ) {
    console.log("Rellena todos los campos");

    res.render("auth/stock.hbs", {
      errorMessage: "Todos los campos deben estar llenos",
      name,
      description,
      rarity,
      noSeries,
      language,
      image,
    });
    return;
  } 

  try {
    const foundCardWithSameName = await Card.findOne({ name });
    if (foundCardWithSameName !== null) {
      res.status(400).render("auth/stock.hbs", {
        errorMessage: "Card already exist"
      });
      return;
    }

    await Card.create({
      name,
      description,
      rarity,
      noSeries,
      language,
      image,
    });
    res.redirect("/"); 
  } catch (err) {
    next(err)
  }
})

module.exports = router;