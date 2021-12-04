// Creating a Server

const http= require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url , req.method);

    // Set header content type and content
    res.setHeader('Content-Type', 'text/html');

    // Send an HTML file 
    fs.readFile('./views/index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            // We can also use res.end(data) directly to send file
            res.end(data);
        }
    })


   

});  // Method to create server 


server.listen(3000,()=>{
    console.log('Listening on port 3000');
});


// LOCAL HOST

// 1) localhost is like a domain name on the web 
// 2) local host ------------------> 127.0.0.1---------------------> Own Computer 

// PORT NUMBERS

// 1)Port numbers are like doors into computers 
