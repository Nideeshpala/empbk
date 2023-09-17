// connect .env file
require('dotenv').config()


// import router
const router=require('./routes/router')



// express importing
const express=require('express')

// server front-end connection
const cors=require('cors')

// import db connection file

require('./database/connection')

// server creation

const server=express()

server.use(cors())


server.use(express.json())


server.use(router)



const port=4000 || process.env.port

// export upload folder to client

server.use('/uploads',express.static('./uploads'))


server.listen(port,()=>{
    console.log(`__________ems server starts at port number ${port}____________`);
})
