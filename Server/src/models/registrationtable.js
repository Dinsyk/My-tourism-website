const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Dinsy:dinsy143amruth@cluster0.2ps12pt.mongodb.net/Tourism?retryWrites=true&w=majority')
const Schema=mongoose.Schema
const registrationSchema=new Schema({
    login_id:{type:mongoose.Types.ObjectId,ref:'logintable'},
    name:{type:String},
    email:{type:String},
    phone:{type:String},
    username:{type:String},
    password:{type:String},
   

})
const registrationdata=mongoose.model('registrationtable',registrationSchema)
module.exports=registrationdata