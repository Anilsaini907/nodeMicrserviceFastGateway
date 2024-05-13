const express=require('express');
const app=express();

const port=8081;

app.get('/',(req,res)=>{
    res.send('orders');
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});