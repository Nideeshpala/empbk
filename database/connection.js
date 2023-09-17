 const mongoose=require('mongoose')

 mongoose.connect(process.env.baseurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then(()=>{
    console.log("-------------mongo db atlas connected------------");
 }).catch(()=>{
    console.log("----------mongodb connection error,,,,,,,,,,,,,,,");
 })