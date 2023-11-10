const express = require('express');
const router = express.Router();



// GET "/auth/signup" => renderizar formulario de registro
router.get("/signup", (req, res, next) => {

    res.render("auth/signup.hbs")

})


// POST "/auth/signup" => recibir los datos del usuario y crearlo en la DB
router.post("/signup", async (req, res, next) => {

    console.log(req.body)

    const { name, adress, dateOfBirth, telNum, country, email, password,  } = req.body

    // los campos deban estar llenos
    if ( name === "" || adress === "" || dateOfBirth === "" || telNum === "" || country === "" || email === "" || password === "" ) {
    console.log("Rellena todos los campos")
    // 1. queremos indicarle al usuario que hubo fallo de frontend
    res.render("auth/signup.hbs", {
        errorMessage: "Todos los campos deben estar llenos"
    })

    // 2. detener la ejecucion de la ruta/funcion
    return;
    }

    // la contraseña deba ser lo suficientemente segura
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    // const passwordRegex = new RegExp("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm")
    if (passwordRegex.test(password) === false) {
    res.render("auth/signup.hbs", {
        errorMessage: "La contraseña no es lo suficientemente segura. Debe tener al menos 8 carácteres, al menos una mayúscula, una minúscula y un número."
    })
    return; // detener la ruta
    }

    // el correo electronico deba tener el formato correcto
    // el nombre de usuario o correo electronico no este repetido


    // redireccion de prueba si todo sale bien
    res.redirect("/")

})




module.exports = router;
