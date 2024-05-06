const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors')
const productrouter =  require('./router/productroute')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use('/api',productrouter);

app.use((err,req,res,next)=>{
    res.status(err.code||500).json({message:err.message || "unknown error occured"})
})

app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
})