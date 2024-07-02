const router=require('express').Router();
const { addQuote, getRandom, getQuotesByName } = require('../controllers/quoteController');
const isLoggedin=require('../middlewares/isLoggedIn');


router.get('/random',getRandom);
router.post('/add',isLoggedin,addQuote)
router.get('/search/:name',getQuotesByName);
module.exports=router;

