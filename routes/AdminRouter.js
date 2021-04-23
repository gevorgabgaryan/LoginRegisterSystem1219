const express = require('express');
const router = express.Router();
const {adminView}=require(`../controllers/AdminController.js`);
const { checkSign } = require('../middlewares/auth.js');

/* GET home page. */
router.get('/',checkSign,  adminView);

module.exports = router;
