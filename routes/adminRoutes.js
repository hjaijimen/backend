// adminRoutes.js

const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/auth');
const { getAllUsers, deleteUser } = require('../controllers/adminController');

// Route pour récupérer tous les utilisateurs
router.get('/users', isAdmin, getAllUsers);

// Route pour supprimer un utilisateur
router.delete('/users/:userId', isAdmin, deleteUser);

module.exports = router;
