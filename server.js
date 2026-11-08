const express=require('express');
const sum=require('./sum.js')
const app=express();
app.listen(9090,()=>{
    console.log("port is listening");
})

app.get("/home",async(req,res)=>{
    res.json({
        msg:"i am home"
    })
})
app.get("/getSum/:a/:b",async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    })
})