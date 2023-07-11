const express = require('express')
const path = require('path');
const mongoose=require('mongoose')
const Article=require('./models/article')
const articleRouter=require('./routes/articles')
const Subcategory = require('./models/subcategory');
const subcategoryRouter = require('./routes/subcategories');
const Subcategory1 = require('./models/subcategory1');
const subcategory1Router = require('./routes/subcategories1');
const Subcategory2 = require('./models/subcategory2');
const subcategory2Router = require('./routes/subcategories2');

const app =  express()


mongoose.connect('mongodb+srv://athish:athish@cluster0.aghof5l.mongodb.net/sample')


app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'views')));

app.use('/next',articleRouter)//so basically with the address localhost:5000 if u add /next it'll process the articleRouter which is in aticle.js file
app.use('/next',subcategoryRouter)
app.use('/next',subcategory1Router)
app.use('/next',subcategory2Router)

app.get('/',async(req,res)=>{
    const articles=await Article.find()
    const subcategories = await Subcategory.find();
    const subcategories1 = await Subcategory1.find();
    const subcategories2 = await Subcategory2.find();
    res.render('index2',{articles,subcategories,subcategories1,subcategories2})
})
app.listen(5000)