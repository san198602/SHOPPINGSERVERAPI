const express = require('express');
const commentRoutes = express.Router();

const commentController = require('../controllers/Comment.controller');


commentRoutes.get('/get', commentController.getAllComments);
// commentRoutes.post('/create', userController.createUser);
// commentRoutes.get('/getById/:id', userController.getUserById);
// commentRoutes.put('/update/:id', userController.updateUser);
// commentRoutes.delete('/remove/:id', userController.deleteUser);

module.exports = commentRoutes;

