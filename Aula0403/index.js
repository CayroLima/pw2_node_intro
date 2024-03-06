const fs = require('fs') 
const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    //res.write('Oi servidor http do 2H3!')
    /*res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<meta charset="UTF-8"><h1>Olá, eu vim por FileSystem NodeJs</h1>')*/
    fs.readFile('mensagem.html', function (err, data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })

})

server.listen(port, () =>{
    console.log('FileSystem Server Rodando!: '+ port)
})