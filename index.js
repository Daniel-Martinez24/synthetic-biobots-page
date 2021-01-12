const express=require('express');
const app=express();

app.use(express.static(__dirname + '/public'));

const server=app.listen(process.env.PORT || 5000, () => {
  console.log('Servidor web iniciado en el puerto 5000');
});