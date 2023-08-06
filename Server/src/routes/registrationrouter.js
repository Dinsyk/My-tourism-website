const express=require('express')
const registrationrouter=express.Router()
const logintable=require('../models/logintable')
const registrationtable=require('../models/registrationtable')
const bcrypt=require('bcryptjs')



registrationrouter.post('/registration',async(req,res)=>{
    console.log(req.body);
    const{name,email,phone,username,password}=req.body


    try{
        const oldemail=await registrationtable.findOne({email})
        if(oldemail){
            return res.status(400).json({
               message:'email already exsists' 
            })
        }

        const oldusername=await registrationtable.findOne({username})
        if(oldusername){
            return res.status(400).json({
                message:'username already exsists'
            })
        }


        const hashpass=await bcrypt.hash(password,10)
        const logindata=await logintable.create({
            username,
            password:hashpass,
            role:'user'
        })
        console.log(logindata);

        const registrationdata=await registrationtable.create({
            name,
            email,
            phone,

            login_id:logindata._id
        })
        return res.status(200).json({success:true,error:false,message:'registration compleated',data:registrationdata})
    }catch(err){
        res.status(400).json({
            error:err,
            message:'something went wrong'
        })
    }
})
module.exports=registrationrouter
