

//const { Router } = require('express');

const express=require('express');
const app =express();
const productExpressRoute= express.Router();
let ProductSchema =require('../models/product.model');
//let db =require('../db/database')

const multer =require('multer');



const storage=multer.diskStorage({
    destination:'./uploads/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
   
const upload =multer({ storage:storage,});

app.use('/profile',express.static('upload/images'));
productExpressRoute.post('/Upload',upload.single('profile'),(req,res)=>{
    debugger;
    console.log(req.file)
    res.json({
        seccess:1,
        profile_url:`http://localhost:3000/profile/${req.file.filename}`
    })
})

//For Get All product
productExpressRoute.route('/').get((req,res)=>{
    
    ProductSchema.find((error,data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }

    })
})

//For Get Single product
productExpressRoute.route('/product/:Id').get((req,res,next)=>{
    ProductSchema.findById(req.params.Id,(error,data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }

    })
})

//For Add product in database
productExpressRoute.route('/add-student').post((req,res,next)=>{
    debugger;
    ProductSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }

    })
})

//For delete perticular product
productExpressRoute.route('/delete-product/:Id').delete((req,res,next)=>{
    ProductSchema.findByIdAndRemove(req.params.Id,(error,data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg : data
            });
           
        }

    })
})

//For Update file 
productExpressRoute.route('/update-product/:Id').put((req,res,next)=>{
    ProductSchema.findByIdAndUpdate(req.params.Id,{
        $set:req.body
    },(error,data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
            console.log("Updated Seccussfully !!")
           
        }

    })
})
module.exports = productExpressRoute;