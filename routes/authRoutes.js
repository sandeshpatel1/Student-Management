const express = require('express');
const { register, login } = require('../controllers/authController');
const { validateRegister } = require('../middlewares/validators');
const handleValidation = require('../middlewares/handleValidation');

const router = express.Router();

router.post('/register', validateRegister, handleValidation, register);
router.post('/login', login);

module.exports = router;
