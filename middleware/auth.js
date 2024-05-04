// auth.js

// Middleware pour vérifier si l'utilisateur est un administrateur
exports.isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      return next();
    }
    res.status(403).json({ message: 'Accès non autorisé' });
  };
  