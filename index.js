const express=require("express");
const app=express();

app.set("view engine","hbs")

app.get("/",(req,res)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => 
        res.send(json)
    )
})

app.get("/login",(req,res)=>{
    res.render("login.hbs")
})
        


app.listen(2410,()=>{
    console.log("port connected..")
})