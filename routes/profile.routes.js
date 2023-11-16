const express = require('express');
const router = express.Router();

const { isLoggedIn, isAdmin } = require("../middlewares/auth.middleware.js");
const User = require('../models/User.model');

// const Card = require('../models/Card.model.js');

const uploader = require("../middlewares/cloudinary.middleware.js");

// ejemplo de una ruta privada (solo usuarios logeados)
router.get("/", isLoggedIn, (req, res, next) => {

  console.log(req.session.user) // ! la informacion del usuario haciendo esta llamada
  console.log(req.session.user._id) // ! la id del usuario haciendo esta llamada

  // ! usan esta informacion para buscar en la BD cosas de este usuario
  User.findById(req.session.user._id)
  .then((response) => {
    console.log(response) // info del usuario para pasar al render
    res.render("profile/private.hbs", {
        userProfile: response
    })
  })

  .catch((err) => next(err))     
})
        
    // ++++++++++++++++++++++++++++++++++++++++++++++
    // ruta solo para admin (escrito)
router.get("/stock", isLoggedIn, isAdmin, (req, res, next) => {
    // console.log(response)
    User.findById(req.session.user._id)
    .then((response) => {
        console.log(response) // info del usuario para pasar al render
        res.render("auth/stock.hbs", {
            userProfile: response
        }) 
    })
            

})

// +++++++++++++++++++++++++++++++
// recepción de imagen, carga a cloudinary, DB y redirección de usuario tras acción
// router.post("/upload-card", uploader.single("image"), async (req, res, next) => {

//     console.log(req.file)

//     try {
        
//         await User.findByIdAndUpdate(req.session.user._id, {
//             image: req.file.path

//         })

//         res.redirect("/profile/admin")
//     } catch (error) {
//         next(error)
//     }

// })





module.exports = router;