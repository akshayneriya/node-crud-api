const { Router } = require('express');

const createError = require('http-errors')
let express = require('express');
path =require('path');  
mongoose = require('mongoose');
cors=require('cors');
bodyParser=require('body-parser');
dbConfig=require('./db/database');



mongoose.Promise=global.Promise;

mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('Database Connectd');
},error =>{
    console.log('Database Could Not Be Connected :'+error);
});
const app =express();

const start =async ()=>{
    try{
        await mongoose.connect(
            "mongodb://localhost:27017/restapi"

        );
        app.listen(3000,()=>{
            console.log("Server started on port 3000");
        });

    }catch (error){
      console.error(error);
      process.exit(1)    }
}
start();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(cors());
const userRoute=require('./routes/product.routes')
app.use('/endpoint',userRoute);
const port=process.env.PORT || 8080;

const server = app.listen(port, ()=>{
console.log('Port Connected to :' +port);
});

app.use((req,res,next)=>{
    next(createError(404));
});


app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
})

app.use(function (err ,req, res,next){
    if(!err.statusCode) err.statusCode=500;
    res.status(err.statusCode).send(err.message);
})