const http = require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
if(req.url=='/'){
    res.setHeader("content-type","text/html")
res.end('<h1>This is the home page</h1>')
}
else if(req.url=='/about'){
    res.end('this is About page')
}
else if(req.url=='/contact'){
    res.end('this is the Contact page')
}
else if(req.url=='/data'){
fs.readFile("./text.txt","utf-8",(err,data)=>{
   if(err){
    res.end(err)
   }else{
    res.end(data)
   }
})
}

});

server.listen(8080,()=>{
    console.log('server is running in port 8080')
})

// else if(req.url=='/cont'){
//     fs.readFile('./text.txt','utf-8',(err,data)=>{
//        err ? res.end(err) : res.end(data)
//     })
//    try {
//     const data= fs.readFileSync("./text.txt","utf-8")
//     res.end(data)
//    } catch (err) {
//     res.end(err)
//    }
// }