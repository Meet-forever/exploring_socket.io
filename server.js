const express = require('express')
const app = express();
const server = require('http').createServer(app)
const socket = require('socket.io')
const io = socket(server) 
const PORT = process.env.PORT || 8000
const path = require('path')


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req, res) =>{
    res.render("home");  
})



server.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`));

io.on("connection", (socket)=> {
    socket.on("messagesent", (data)=>{

        io.sockets.emit("messagesent", data)
    
    });

})

