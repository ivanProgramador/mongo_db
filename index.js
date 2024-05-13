const mongoose = require("mongoose");

//o mongo funciona atráves de url de servidor
// a função connect recebe a url como parametro 

mongoose.connect("mongodb://127.0.0.1:27017/aprendendoMongo",{useNewUrlParser:true,useUnifiedTopology:true});





