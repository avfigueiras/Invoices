'use strict'
const mongoose = require('mongoose');
//const express = require('express');
//const bodyParser = require('body-parser');
//const app = express();
//const Invoice = require('./models/invoice');
const app = require('./app');
const config = require('./cofig');

   //estableciendo puerto
//const port =process.env.PORT || 3001;

//middleware
/*
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());*/

//muestra todas las facturas,recibe req y res que son los que recibe la peticion en el index.js
const xmls = require('./controllers/manager/manager');
const saveInvoice = require('./controllers/controller').saveInvoice;
/*
app.get('/invoices', async function(req, res) { 
   await Invoice.find({},(err,invoices)=>{
      if(err) return res.status(500).send({sms: `Error al buscar la factura: ${err}`});
       if(!invoices)  return res.status(404).send({sms:`No existen facturas`});
       res.status(200).send({invoices});
  });
}); 
*/

app.post('/invoices', function(req, res) { 
   xmls.map(obj => saveInvoice(obj, res))
   res.send('inserts')
   //res.send(xmls)
});

/*
app.delete('/invoices/:id', function(req, res) { 
   
   //Invoice.findByIdAndRemove()
  // Invoice.deleteOne({ name: 'Eddard Stark' }, function (err) {});
  //Invoice.deleteMany({ id: req.params.id }, function (err) {});
  Invoice.deleteMany({ __v: 0 }, function (err) {})
   res.send('delete invoice')
   //res.send(xmls)
});
*/
//coneccion a la bd
mongoose.connect(config.bd,(err,res,)=>{
  if(err){
     return console.log(`Failed connection to database: ${err}`)
   }
  console.log('Database connected');
  app.listen(config.port, ()=>{
    console.log(`API REST running on http://mongo:${config.port}`);
   })
})