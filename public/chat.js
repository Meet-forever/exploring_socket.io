const socket = io.connect("http://localhost:8000")

const chatscreen = document.getElementById("chat_box"),
        handle = document.getElementById("handle"),
        messagebox = document.getElementById("message_box"),
        btn = document.getElementById("sendmessage");

btn.addEventListener("click", ()=>{
    if(handle.value !== ""){
        socket.emit("messagesent", {
            handle: handle.value,
            messsage: messagebox.value,        
        })
        messagebox.value = ""
    }
})

messagebox.addEventListener("keypress", (e)=>{
    if(handle.value !== ""){
        if(e.key == "Enter"){
            socket.emit("messagesent", {
                handle: handle.value,
                messsage: messagebox.value,        
            })
            messagebox.value = ""
        }
    }
})

socket.on("messagesent", (data)=>{
    chatscreen.innerHTML += "<p><strong>" + data.handle.toUpperCase() + ":   </strong> " + data.messsage + "</p>"; 
})