const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home', { title: 'Portal Web - GSC' })
})

module.exports = router;