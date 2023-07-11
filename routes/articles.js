const express=require('express')
const article=require('./../models/article')
const router=express.Router()

router.get('/test',(req,res)=>{
    res.send('In next page')/*when /next is typed, this will be executed
    btw if int this router func if anything is given after / that should also be in address to be executed*/
})
module.exports=router