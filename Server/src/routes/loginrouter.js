const express=require('express')
const loginrouter=express.Router()
const logintable=require('../models/logintable')
const bcrypt=require('bcryptjs')

loginrouter.post('/login',async(req,res)=>{
     const{username,password}=req.body
     console.log(username);

     try{
        const oldusername=await logintable.findOne({username})
        if(!oldusername){
            return res.status(400).json({
                message:'username incorrect'
            })
        }
        

        const loginpass=await bcrypt.compare(password,oldusername.password)
        if(loginpass){
            return res.status(200).json({
                success:true,
                error:false,
                data:oldusername,
                message:'login successfull'
            })
        }else{
            return res.status(400).json({
                message:'login not success'
            })
        }
     }catch(err){
        res.status(400).json({
            message:'something went wrong'
        })
     }
})

module.exports=loginrouter