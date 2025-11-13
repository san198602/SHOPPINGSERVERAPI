const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin.controller');

router.get('/getAdminById/:id', AdminController.getAdminById);
router.get('/getAdminByParams', AdminController.getAdminByParams);

router.get('/getalladmins', AdminController.getalladmins);
router.post('/create', AdminController.createAdmin);
router.put('/updateAdmin/:id', AdminController.updateAdmin);
router.delete('/deleteAdmin/:id', AdminController.deleteAdmin);

module.exports = router;