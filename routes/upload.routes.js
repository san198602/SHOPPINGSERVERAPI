const express = require('express');
const router = express.Router();
const multer  = require('multer')
var upload = multer({ dest: './uploads' });
const uploadController = require('../controllers/upload.controller');

// router.get('/getAdminById/:id', uploadController.getAdminById);
// router.get('/getAdminByParams', uploadController.getAdminByParams);

// router.get('/getalladmins', uploadController.getalladmins);
 router.post('/create',upload.single('csv'), uploadController.createUpload);
// router.put('/updateAdmin/:id', uploadController.updateAdmin);
// router.delete('/deleteAdmin/:id', uploadController.deleteAdmin);

module.exports = router;