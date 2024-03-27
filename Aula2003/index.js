//npm install chalk@4.1.2
//npm intall inquirer@8.1.2
const inquirer = require("inquirer")
const chalk = require("chalk")
const fs = require("fs")

console.log("--|| Iniciamos o Accounts ||--")

operation()

function operation(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar Conta','Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
        }
    ]).then((answer) =>{
        const action = answer['action']
        
        if (action === "Criar Conta") {
            console.log("Criando a Conta")
            createAccount()
        }
        else if (action === "Depositar"){
            console.log("Depositando na sua Conta")
            //deposit()
        }
        else if (action === "Consultar Saldo"){
            console.log("Consultando Saldo")
            //getAccountBalance()
        }
        else if (action === "Sacar"){
            console.log("Sacando da Conta")
            //withdraw()
        }
        else if (action === "Sair"){
            console.log(chalk.bgBlue.black("Obrigado por usar o Accounts App!"))
            process.exit()
        }
        //#region Com Switch
        /*
        switch (action) {
            case "Criar Conta":
                console.log("Criando a Conta")
                //createAccount()
                break;
            case "Consultar Saldo":
                console.log("Consultando Saldo")
                //getAccountBalance()
                break;
            case "Depositar":
                console.log("Depositando na sua Conta")
                //deposit()
                break;
            case "Sacar":
                console.log("Sacando da Conta")
                //withdraw()
                break;
            case "Sair":
                console.log(chalk.bgBlue.black("Obrigado por usar o Accounts App!"))
                process.exit()
                break;
            }
            */
            //#endregion
    
        }).catch(err => console.log(err))
}

function createAccount(){
    console.log(chalk.bgGreen.white('Obrigado por utilizar o Accounts Bank!'))
    console.log(chalk.green('Vamos definir as opções da sua conta ?'))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Forneça o Nome para sua conta no banco Accounts.'
        }
    ]) .then((answer) => {
        const accountName = answer['accountName']
        
        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black(`A conta: ${accountName} já existe.`))
            console.log(chalk.bgRed.black(`Escolha outro nome: `))
            buildAccount(accountName)
        }
        fs.writeFileSync(
            `accounts/${accountName}.json`,
            `{"balance":0}`,
            function(err){
                console.error(err)
            }
        )
        
        console.info(chalk.bgGreen.white(`Ben vindo ao Accounts Bank:${accountName}`))
        console.info(chalk.green('Obrigado pela preferência'))

        operation()
    })
}
