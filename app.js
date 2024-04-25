const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const app = express();

const router = express.Router();

//Envialo (post)
router.post("/", async (req, res) => {
    const body = req.body
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
});


//Pedilo (get)
router.get("/", async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
})

//Pedilo {Id} (get)
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})

//Actulizar (Put)
router.put("/:id", async (req, res) => {
    const body = req.body
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({ _id: id }, body)
    res.send(respuesta);
})


//BORRAlo (delete)
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({ _id: id })
    res.send(respuesta);
})

//funciones q nose para q son
app.use(express.json());
app.use(router);

//port
app.listen(3001, () => {
    console.log("El server esta en el puerto 3001");
})

//funcion callback
dbconnect();