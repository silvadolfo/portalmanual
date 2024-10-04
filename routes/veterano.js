const express = require('express');
const router = express.Router();

// rota para colaborador veterano
router.get('/', (req, res) => {
    res.render('veterano', { title: 'Colaborador Veterano' });
});

module.exports = router;
