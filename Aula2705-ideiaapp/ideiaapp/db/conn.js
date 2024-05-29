const { Sequelize } = require('sequelize')
                                                //localhost    //vazio
const sequelize = new Sequelize('ideias_db', 'kauansiqueira', '', {
    host: 'dadosappideiasferrerinha.mysql.database.azure.com',//root
    dialect: 'mysql',
    ssl: true
})

try {
    sequelize.authenticate()
    console.log('Conectado ao servidor MySQL!')
} catch (error) {
    console.error(`Error MySQL: ${error}`)
}

module.exports = sequelize



