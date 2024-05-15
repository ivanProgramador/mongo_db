const mongoose = require("mongoose");
 
const articleModel = require("c:/temp/mongo_db/Article");


mongoose.connect("mongodb://127.0.0.1:27017/aprendendoMongo",{useNewUrlParser:true,useUnifiedTopology:true});

const Article = mongoose.model("Article",articleModel);


Article.find({}).then(articles=>{
   console.log(articles);
}).catch(err=>{
  console.log(err);
})












