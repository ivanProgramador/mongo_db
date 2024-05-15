/*
A atualização de dados no mongo bd também, é um processo simples,
no caso não precisa usar where , é como se a condicional ficasse implicita 
no primiero parametro eu passo o id do objeto e no segundo eu informo os campos e os 
valores que devem mudar desse objeto
*/

Article.findByIdAndUpdate('664349cf3c8d25e868cc64e1',{title:'Vue do Zero',author:'Ivan',body:'teste'}).then(articles=>{
    console.log(articles);
}).catch(err=>{
    console.log(err);
});