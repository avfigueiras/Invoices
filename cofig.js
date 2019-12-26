module.exports = {
    //especificamos que el puerto sea una variable de entorno o el puerto 3000
    port: process.env.PORT || 3001,
/*podemos tener una url en la nube para Mongodb en una variable de entorno o la direccion del localhost*/
  bd: process.env.MONGODB || 'mongodb://localhost:27017/invoice'
}