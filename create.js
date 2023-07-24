const http = require('http');

const server = http.createServer(listner);
server.listen(3000,()=>{
    console.log('URl : http://localhost:3000')
})

function listner(reqest,response){
        response.setHeader('Content-Type', 'text/csv');
        response.setHeader('Content-Disposition' , 'attachment; filename=details.csv')
        // response.writeHead(200,{
        //     'context-type' : 'text/html'
        // })
        const body ='name,age,rollnum\ndeepanshu,23,16'
        response.end(body)
}

