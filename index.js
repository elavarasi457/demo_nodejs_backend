const express=require("express");
const app=express();

app.set("view engine","hbs")

app.get("/",(req,res)=>{
   res.render("index.hbs")
})

app.get("/login",(req,res)=>{
    res.render("login.hbs")
})
        


app.listen(2410,()=>{
    console.log("port connected..")
})