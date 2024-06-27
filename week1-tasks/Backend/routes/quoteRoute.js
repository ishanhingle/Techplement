const router=require('express').Router();
const { addQuote, getRandom } = require('../controllers/quoteController');
const isLoggedin=require('../middlewares/isLoggedIn');


router.get('/random',getRandom);
router.post('/add',isLoggedin,addQuote)
module.exports=router;

