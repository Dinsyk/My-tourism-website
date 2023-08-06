const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Dinsy:dinsy143amruth@cluster0.2ps12pt.mongodb.net/Tourism?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const addpackageSchema=new Schema({
    packagename:{type:String},
    days:{type:String},
    hotelname:{type:String},
    food:{type:String},
    description:{type:String},
    image:{type:String},
    price:{type:String}
})
const addpackagedata=mongoose.model('addpackagetable',addpackageSchema)
module.exports=addpackagedata