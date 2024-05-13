/* Um model no mongo equivale a um objeto 
   quase como o sequelize só que a sintaxe é mais simples 
   No mongo a relação entre dados não se dá através de chaves estrangeiras 
   é sim atraves de herança entre os objetos 

   por exemplo: O model abaixo tem um campo chamado resume que tem o author 
   que pode ser dono de vários artigos e tambem tem o conteúdo pois assim como 
   um autor ppode ter varios artigos um conteudo tambem pode ter varios artigos
   falando sobre ele, então todos os objetos que compartilham essa semelhança 
   estaão de alguma forma ligados um a outro ´pe assim que se estabelece uma ligação 
   entre registros no mongo  

*/

const mongoose = require("mongoose");

const articleModel = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date:{
        type: Date,
        default: Date.now
    },
    resume:{
        content:String,
        author:String
    }
});

module.exports = articleModel;