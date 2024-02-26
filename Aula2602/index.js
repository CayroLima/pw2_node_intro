// npm install chalk@4.1.2
// Importando o Chalk 👇
const chalk = require("chalk")

function calculadora(n1, n2, op){
    // Usando Switch
    switch (op) {
        case "+":
            return (n1+n2).toFixed(2) // fundo amarelo fonte preta
        case "-":
            return (n1-n2).toFixed(2) // fundo azul fonte branca
        case "*":
            return (n1*n2).toFixed(2) // fundo verde fonte preta
        case "/":
            return (n1/n2).toFixed(2) // duas casas decimais fundo branco fonte vermelha
        default:
            console.log(chalk.bgRed.yellow("Invalid Operation"))
            break;
    }
    // Usando If e Else  

    /*
    if (op == "+"){
        return (n1+n2).toFixed(2)
    }
    else if (op == "-") {
        return (n1-n2).toFixed(2)
    }
    else if (op == "*") {
        return (n1*n2).toFixed(2)
    }
    else if (op == "/") {
        return (n1/n2).toFixed(2)
    }else{
        console.log(chalk.bgMagenta.white("Invalid Operation"))
    }
    */
}

// Saida de Dados

console.log(chalk.bgYellow.black(calculadora(10,2,"+")))

console.log(chalk.bgBlue.white(calculadora(50,100,"-")))

console.log(chalk.bgGreen.black(calculadora(72,8,"/")))

console.log(chalk.bgRed.white(calculadora(100,5,"*")))

console.log(calculadora(100,5,"J"))