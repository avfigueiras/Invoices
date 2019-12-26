const convert = require('xml-js');
var fs = require('fs');
//leyendo las facturas xml
var arrayFiles = [];
fs.readdir('./invoices', async (err, files) => { 
    if(err) return console.error(err); 
    files.map(name => { 
        const filePath = './invoices/'+name;
        fs.readFile(filePath, function(err, data) {
             var result = JSON.parse(convert.xml2json(data, {compact: false, spaces: 4})); 
             if(result.elements[0].attributes.tipo === 'factura'){
                fs.stat(filePath, function (err, stats) {
                    if (err) return cb2(err);
                    var fileInfo = { fileDate: stats.birthtime };
                  const emisor = result.elements[0].elements.find(obj => obj.name === 'emisor').attributes; 
                  const receptor = result.elements[0].elements.find(obj => obj.name === 'receptor').attributes;
                  const items = result.elements[0].elements.find(obj => obj.name === 'items').elements[0]; 
                  let obj = {
                       id: result.elements[0].attributes.emision, 
                       rutEmisor: emisor.rut,
                       rutReceptor: receptor.rut,
                       razonSocialEmisor: emisor.razonSocial,
                       razonSocialReceptor: receptor.razonSocial, 
                       monto: items.attributes.monto, 
                       iva: items.attributes.iva, 
                       producto: items.elements[0].text ,
                       fechaEmision: fileInfo.fileDate,
                    }
                 // crea tu objeto con lo valores ya sacados en la base de datos: 
                 arrayFiles.push(obj);
                    });
                    
                }
             });
         }); 
    });
module.exports = arrayFiles;