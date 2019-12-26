'use strict'
const mongoose = require('mongoose'),
     Schema = mongoose.Schema; 

const invoiceSchema = Schema({
   id: String,
   rutEmisor: String,
   rutReceptor: String,
   razonSocialEmisor: String,
   razonSocialReceptor:String,
   monto: Number,
   iva:Number,
   producto: String,
   fechaEmision: {type: Date},
})

module.exports = mongoose.model('Invoice',invoiceSchema);