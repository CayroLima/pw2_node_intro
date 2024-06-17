//npx dotenv-vault@latest pull

const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

const Ideia = require('./models/Ideia')

const IdeiasRoutes = require('./routes/ideiaRoutes')
const authRoutes = require('./routes/authRoutes')
const IdeiasController = require('./controllers/IdeiaController')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(
    session({
        name:'session',
        secret:'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'session'),
        }),
        cookie: {
            secure: false,
            maxAge: 3600000,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true,
        },
    }),
)



app.use(flash())

app.use(express.static('public'))



app.use((req,res, next) => {
    console.log(req.session.userID)

    if(req.session.userID){
        res.locals.session = req.session
    }
    
    next()
})


app.use('/ideias', IdeiasRoutes)
app.use('/', authRoutes)

app.get('/', IdeiasController.showIdeias)


conn
    .sync({})
    .then(() => {
        app.listen(3000, () => {
            console.log('Servidor: http://localhost:3000/')
        })
    })
    // .catch((err) => {
    //     console.error(`Error do MySQL / Sequelize: ${err}`)
    // });























    // const express = require('express')
// const exphbs = require('express-handlebars')
// const session = require('express-session')
// const FileStore = require('session-file-store')(session)
// const flash = require('express-flash')
// const conn = require('./db/conn')


// const app = express()


// const Ideia = require('./models/Ideia')
// const authRouter = require('./routes/authRoutes')
// const ideiasRoutes = require('./routes/ideiaRoutes')
// const IdeiaController = require('./controllers/IdeiaController')



// app.engine('handlebars', exphbs())
// app.set('view engine', 'handlebars')


// app.use(express.static('public'))

// app.use('/ideias', ideiasRoutes)
// app.use('/', authRouter)

// // app.use('/', IdeiaController.showIdeias)

// conn
// .sync({force: true})
// .then(() =>{
//     app.listen(3000, () => {
//         console.log('Servidor operando na porta local: http://127.0.0.1:3000')
//     })
// })






