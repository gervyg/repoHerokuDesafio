const { Router } = require("express");
const db = require("../db");


const router = Router()

//**Rutas API*/
router.get('/users', async (req, res) => {
    const user = db.getuser()
    res.json(user);
})

//Crear
router.post('/users', async (req, res) => {

    const { username, email, contraseña } = req.body;
    const user = await db.userCreate(username, email, contraseña)
    res.send(user);

})

//Eliminar
router.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    const respuesta = await db.eliminarTarea(id);
    res.send(respuesta);
});


module.exports = router