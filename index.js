const http = require('http');
const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req,res) => {
    res.shatusCode  = 200;
    // 设置密码
    res.setHeader('content-type', 'text/plain');
    res.write('hello world')
    res.end();
});
server.listen(port,hostname,() =>{
    console.log('服务器已启动')
})