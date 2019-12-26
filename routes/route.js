'use strict' 
const express = require('express');
const api = express.Router(); 
const Controller = require('../controllers/controller');

api.get('/invoices',Controller.getInvoices);
api.post('/save',Controller.saveInvoice);
api.delete('/invoices/:id',Controller.deleteInvoice);

module.exports = api;