const router=require('express').Router();
const {registerUser,loginUser, getQuotes}=require('../controllers/userController')


router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/quotes/:username',getQuotes);
module.exports=router;