const mongoose =require('mongoose')

const connect=mongoose.connect('mongodb+srv://Sagnik_:Test123@cluster0.2upegmf.mongodb.net/sheymoney',{useNewUrlParser: true,useUnifiedTopology:true})

const connection=mongoose.connection

connection.on('error',err=>console.log(err))

connection.on('connected',()=>console.log('Mongo DB connection successfull'))