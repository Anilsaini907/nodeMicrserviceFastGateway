const express=require('express');
const app=express();

const port=8082;

app.get('/',(req,res)=>{
    res.send('payment');
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});