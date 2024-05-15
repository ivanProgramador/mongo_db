/*
 O ORM mongoose tem muita semelhança com o sequelize mas importante lembrar que não é a mesma coisa,
 o codigo abaixo equivale a um select então ele vai trazer todos os dados da collection 

*/

Article.find({}).then(articles=>{
   console.log(articles);
}).catch(err=>{
  console.log(err);
})

/*
Busca por dados especificos usam a funcção find() ´so que elea recebe um objeto como 
parametro , oque define queis são os requisitos da busca. 
*/

/*
Aqui eu busco todos os artigos que tenham ivan como autor
*/
Article.find({'author':'Ivan'}).then(articles=>{
  console.log(articles);
}).catch(err=>{
 console.log(err);
})

/*
Aqui eu busco um atigo pelo id que tenha o Ivan como author 

*/

Article.find({'_id':'664349cf3c8d25e868cc64e1','author':'Ivan'}).then(articles=>{
  console.log(articles);
}).catch(err=>{
 console.log(err);
})

/*
Aqui eu faço uma busca usando sub objetos como parametro
ou seja eu entro no resume e seleciono o campo content 
e depois eu informo oque esse conmteudo deve ter para ser 
chamado no select 
*/

Article.find({'resume.content':'teste'}).then(articles=>{
  console.log(articles);
}).catch(err=>{
 console.log(err);
})


/*
Buscando um unico regitro

Embora na minha base de dados eu tenha muitos registros que tem o Ivan como author 
as vezes eu so quero um registro para atender a consulta então se eu fizer unma pesquisa 
usando o findOne() ele vai trazer o pormiero registro que ele encontrar qua atende aos reuisitos da busca 
e parar.  
*/

Article.findOne({'author':'Ivan'}).then(articles=>{
  console.log(articles);
}).catch(err=>{
 console.log(err);
})




