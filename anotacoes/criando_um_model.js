/* Um model no mongo equivale a um objeto 
   quase como o sequelize ´so que a sintaxe é mais simples 
   No mongo a relção entre dados não se dá atraves de chaves estrangeiras 
   é sim atraves de herança entre kos objetos 

   por ecemplo: O model abaixo tem um campo chamdo resume que tem o author 
   que pode ser dono de varios artigos e tambem tem o conteudo pois assim como 
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