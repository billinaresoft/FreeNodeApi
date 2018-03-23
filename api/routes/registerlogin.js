var express = require ('express');
const router=express.Router();
let mysql = require('mysql');
let config = require('../../config');
let connection = mysql.createConnection(config);
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'ok login get 1111'
    })
})
router.get('/tes',(req,res,next)=>{
    res.status(200).json({
        message:'ok login get 2222'
    })
})
router.post('/LoginAPI', function (req, res, next) {    

    var Param = {
        Email:req.body.Email,
        Password:req.body.Password,
    }
    connection.query('CALL testlogin(?,?)',[Param.Email,Param.Password], function (err, rows, fields) {
       
        if (err || rows[0].res === 0) {
            res.status(400).send(err);
        }
        else{
            res.status(200).send(rows[0]);
        }
        
    });
    
   
});
router.post('/login', (req, res, next) => {
    const Login = {
        EmailID: req.body.EmailID,
        Password: req.body.Password
    };
    var today = new Date();
    var users={
        "name":'gfdf',
        "email":'gfdf',
        "password":'gfdf',
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          })
        }else{
            res.json({
              status:true,
              data:results,
              message:'user registered sucessfully'
          })
        }
      });
    //res.status(201).json({
       // message: 'Handling POST requests to regsiter login',
      //  LoginObj: Login,
    //});
});

module.exports=router;