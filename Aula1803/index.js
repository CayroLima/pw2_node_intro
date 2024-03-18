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
            //createAccount()
        }
        else if (action === "Depositar"){
            console.log("Depositando na sua Conta")
            //deposite()
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
                //deposite()
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

