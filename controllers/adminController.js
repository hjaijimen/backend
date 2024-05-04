// adminController.js

const { query } = require('../database');

// Contrôleur pour récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
  }
};

// Contrôleur pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    await query('DELETE FROM users WHERE id = ?', [userId]);
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
  }
};
