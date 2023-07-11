const mongoose=require('mongoose')

const article2Schema=new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category_id: {
        type: Number,
        required: true
    },
})
module.exports=mongoose.model('Subcategories',article2Schema)