const mongoose = require("mongoose");
//impotando o model 
const articleModel = require("c:/temp/mongo_db/Article");

//o mongo funciona atráves de url de servidor
// a função connect recebe a url como parametro 

mongoose.connect("mongodb://127.0.0.1:27017/aprendendoMongo",{useNewUrlParser:true,useUnifiedTopology:true});

//preparando o model
/*
Aqui o model se torna uma especie de classe e os registros do banco são como 
objetos criados com base nela   
ele sempre coloca um s no fim de acada colections criada.
*/
const Article = mongoose.model("Article",articleModel);

/*
 No codigo abaixo por exemplo eu crio um objeto com caracteristicas unicas porem ele pertence a classe 
 Article então basicamente uma tabela é uma classe eos registros são objetos criados com base nela, no 
 mongo não é necessario preecher todos os dados, o campó que não foi preeenchido fica vazio mas ele não vai 
 deixar de salvar por causa disso
*/

const artigo = new Article({title:'desevolvimento',author:"Ivan",body:"Esse o body do artigo",});

/*
Gravando os dados de fato no banco 
*/

artigo.save().then(()=>{
    console.log("Artigo salvo");
   }).catch(err =>{
     console.log(err);
   });
