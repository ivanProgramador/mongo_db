/*
 O ORM mongoose tem muita semelhança com o sequelize mas importante lembrar que não é a mesma coisa,
 o codigo abaixo equivale a um select então ele vai trazer todos os dados da collection 

*/

Article.find({}).then(articles=>{
   console.log(articles);
}).catch(err=>{
  console.log(err);
})