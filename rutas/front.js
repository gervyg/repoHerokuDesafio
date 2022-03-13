const { Router } = require("express");
const db = require("../db")

const router = Router()

//**Rutas handlebars*/
router.get('/', async (req, res) => {
    const user = await db.getuser()
    res.render('index', { user });
})

router.get('/user-create', async (req, res) => {
    res.render("index", {
        layout: "usercreate"
    });
})

router.get('/user-delete/:id', async (req, res) => {
    res.render("index", {
        layout: "userdelete",
        id: req.params.id
    });
})



module.exports = router