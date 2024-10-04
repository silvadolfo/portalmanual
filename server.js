const express = require('express')
const path = require('path')
const app = express()


// estáticos
app.use(express.static(path.join(__dirname, 'public')))

// ejs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// rotas
const indexRouter = require('./routes/index')
const novoColaboradorRouter = require('./routes/novo-colaborador');
const veteranoRouter = require('./routes/veterano');

// use as rotas
app.use('/', indexRouter)
app.use('/novo-colaborador', novoColaboradorRouter);
app.use('/veterano', veteranoRouter);

// servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`)
})