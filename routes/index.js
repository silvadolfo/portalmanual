const express = require('express');
const router = express.Router();

// rota principal
router.get('/', (req, res) => {
    res.render('home', { title: 'Portal do Colaborador' });
});

module.exports = router;
