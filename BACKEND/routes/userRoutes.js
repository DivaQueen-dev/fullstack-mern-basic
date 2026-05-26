const express = require('express');
const router = express.Router();
const userController = require("../Controllers/userController");

router.get('/api/users',userController.getUsers);
router.post('/api/add-user',userController.addUser);
router.get('/api/get-user-by-id/:id',userController.getUserById);
router.delete('/api/delete-user-by-id/:id',userController.deleteUser);
router.put('/api/update-user-by-id/:id',userController.editUser);



module.exports = router;