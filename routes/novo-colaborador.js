const express = require('express');
const router = express.Router();

// rota para novo colaborador
router.get('/', (req, res) => {
    res.render('novo-colaborador', { title: 'Novo Colaborador' });
});

module.exports = router;
