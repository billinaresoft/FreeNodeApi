var express = require ('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'ok customer get'
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'ok customer post'
    })
})
module.exports=router;