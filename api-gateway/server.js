const express=require('express');
const gateway=require('fast-gateway');

const port =9001;

const server = gateway({
    routes:[
    {
        prefix:'/order',
        target:'http://localhost:8081'
    },
    {
        prefix:'/payment',
        target:'http://localhost:8082'
    }
]
});

server.get('/api',(req,res)=>{
res.send("service started successfully");
});

server.start(port).then(server=>{
    console.log(`server started on port ${port}`);
});