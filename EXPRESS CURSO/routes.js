const express = require('experss');
const router = express.Router();

//Rutas
router.get('/', (req,res) => {
    /*res.end('Hola mundo');*/
    res.render('index.ejs')
});

router.get('/login', (req,res)=> {
    /*res.end('Aquí va el login');*/
    res.render('login');
});


module.exports = router;