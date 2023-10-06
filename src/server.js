const express = require("express"); //importei o express

const app = express(); //inicializei o express

// // Quando um cliente faz uma solicitação GET para a rota raiz ("/")
app.get("/message/:id/:product", (request, response) => {

const {id , product} = request.params;

// O servidor responde:
  response.send(`
  Bem Vindo a página de id: ${id} \n
  Esta pagina pertence ao produto ${product}
  `);
});

const PORT = 3333; //constante pra definir a porta que tera um observador
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
//quando iniciar, executar essa mensagem no terminal