const express = require('express');
const { registerView ,registerNewUser} = require('../controllers/AuthController');
const router = express.Router();


router.get('/register',registerView);

// post router for register
router.post(`/register`,registerNewUser )

module.exports = router;
