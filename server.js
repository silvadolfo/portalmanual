const express = require('express')
const path = require('path')

const app = express()
const indexRouter = require('./routes/index')

// estáticos
app.use(express.static(path.join(__dirname, 'public')))

// ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// rotas
app.use('/', indexRouter)

// servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`)
})