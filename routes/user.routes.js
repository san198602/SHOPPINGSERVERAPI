const express = require('express');
const router = express.Router();
const userController = require('../controllers/User.controller');


router.get('/getAllUsers', userController.getAllUsers);
router.post('/createUser', userController.createUser);
router.get('/getUserById/:id', userController.getUserById);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;