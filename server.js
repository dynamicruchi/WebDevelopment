const express=require("express");
const app=express();
const port=process.env.PORT || 3030;

app.get("/",function(req,res){
    //res.send("Hello World Again");
    res.sendFile(__dirname+"/Front-end/index.html");
})
app.listen(port,function(){
    console.log("Server running on http://localhost:"+port);
})