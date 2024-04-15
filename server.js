// const express=require('express');
import express from 'express';//import er statement ta module js er under e pore
const app=express();
// app.get('/',(req,res)=>{
//     res.send('server created');
// });

//get a list of 5 jokes 
app.get('/api/jokes',(req,res)=>{
    const jokes=[{
        id:1,
        title:'Ajoke',
        content:'1st joke of the day'
    },
    {
        id:2,
        title:'Ajoke',
        content:'2nd joke of the day'
    },
    {
        id:3,
        title:'Ajoke',
        content:'3rd joke of the day'
    },
    {
        id:4,
        title:'Ajoke',
        content:'4th joke of the day'
    }];
    res.send(jokes);
});
const port= 3000;
app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);


}); 