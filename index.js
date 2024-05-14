const mongoose = require("mongoose");
 
const articleModel = require("c:/temp/mongo_db/Article");


mongoose.connect("mongodb://127.0.0.1:27017/aprendendoMongo",{useNewUrlParser:true,useUnifiedTopology:true});

const Article = mongoose.model("Article",articleModel);



const artigo = new Article({title:'desevolvimento',author:"Ivan",body:"Esse o body do artigo",});



artigo.save().then(()=>{
    console.log("Artigo salvo");
   }).catch(err =>{
     console.log(err);
   });











