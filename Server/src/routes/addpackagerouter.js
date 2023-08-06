const express=require('express')
const addpackagerouter=express.Router()
const addpackagetable=require('../models/addpackagetable')
const bcrypt=require('bcryptjs')
const multer=require('multer')

addpackagerouter.post('/addpackage',async(req,res)=>{
    const{packagename,days,hotelname,food,description,image,price}=req.body
    console.log(packagename);
    console.log(days);
    console.log(hotelname);
    console.log(food);
    console.log(description);
    console.log(image);

    console.log(price);



    try{
        const addpackagedata=await addpackagetable.create({
           packagename,
           days,
           hotelname,
           food,
           description,
           image,
           price 
        })
        return res.status(200).json({success:true,error:false,message:'adding compleated',data:addpackagedata})
    }catch(err){
        res.status(400).json({
            error:err,
            message:'something went wrong'
        })
    }
})

addpackagerouter.get('/view-package',(req,res)=>{
    addpackagetable.find().then((details)=>{
        // console.log(details);
        res.status(200).json({
            data:details
        })
    })
})

addpackagerouter.get('/view-editablepackage/:editpackageid',(req,res)=>{
    const id = req.params.editpackageid
    console.log(id);
    addpackagetable.findOne({_id:id}).then((details)=>{
        // console.log(details);
        res.status(200).json({
            singledata:details
        })
        
    })
})

addpackagerouter.post('/editaction',(req,res)=>{
    var item={
    packagename:req.body.packagename,
    days:req.body.days,
    hotelname:req.body.hotelname,
    food:req.body.food,
    description:req.body.description,
    image:req.body,image,
    
    price:req.body.price
    }
    console.log("id",req);
    
    const id=req.body._id
    addpackagetable.updateOne({_id:id},{$set:item}).then((details)=>{
        console.log(details);
        res.status(200).json({
            response:details

        })
    })

})


// to delete a perticular package
addpackagerouter.get('/delete-package/:packageid',(req,res)=>{
    const id=req.params.packageid
    console.log(id);
    addpackagetable.deleteOne({_id:id}).then((details)=>{
        console.log('item deleted');
    })
})
// to view a single package 
addpackagerouter.get('/viewsinglepackage/:packageid',(req,res)=>{
    const id=req.params.packageid
    console.log(id);
    addpackagetable.findOne({_id:id}).then((details)=>{
        res.status(201).json({
            singledataview:details
        })
    })
})


// to add image in the package
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../public/assets')
    },
    filename:function(req,file,cb){
        cb(null,req.body.name)
    }
})
var upload=multer({storage:storage})
addpackagerouter.post('/upload',upload.single('file'),(req,res)=>{
    return res.json('file uploaded')
})




// console.log(data);
module.exports=addpackagerouter