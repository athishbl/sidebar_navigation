const express=require('express')
const Subcategory=require('./../models/article2')
const router=express.Router()

router.get('/test233', async(req,res)=>{
    //const subcategories = await Subcategory.find();
    res.send('In subcategories page')/*when /next is typed, this will be executed
    btw if int this router func if anything is given after / that should also be in address to be executed*/
})
module.exports=router