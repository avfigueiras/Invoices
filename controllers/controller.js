const Invoice = require('../models/invoice');
const xmls = require('../controllers/manager/manager');

async function getInvoices(req,res){
    await Invoice.find({},(err,invoices)=>{
        if(err) return res.status(500).send({sms: `Error al buscar la factura:${err}`});
        if(!invoices)  return res.status(404).send({sms:`No existen facturas`});
        res.status(200).send({invoices});
    });
  }


  //guarda la factura
function saveInvoice(obj){
    /*let invoice = new Invoice();
    const id = obj.id;
    console.log(id)
     Invoice.findOne({ id: id }, function (err, resutl) {
       if(!resutl)
       {
        // res.send('no esta')
        invoice.id = obj.id;
        invoice.rutEmisor = obj.rutEmisor;
        invoice.rutReceptor = obj.rutReceptor;
        invoice.razonSocialEmisor = obj.razonSocialEmisor;
        invoice.razonSocialReceptor = obj.razonSocialReceptor;
        invoice.monto = obj.monto;
        invoice.iva = obj.iva;
        invoice.producto = obj.producto;
        invoice.fechaEmision = obj.fechaEmision;
        invoice.save(invoice);
       }
     });
    */
 
  }

  function deleteInvoice(req, res){
    Invoice.deleteMany({ __v: 0 }, function (err) {})
   res.send('delete invoice')
}
  //Exportando las funciones 
module.exports = {
     getInvoices,
    saveInvoice,
    deleteInvoice
 }