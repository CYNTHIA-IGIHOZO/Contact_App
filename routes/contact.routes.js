 const express = require('express');
const router = express.Router();

const contactController = require('../controller/contact.controller.js')



router.get('/Contact/all',contactController.getAllcontacts)
router.get('/Contact/:id',contactController.getcontactbyid)
router.get('/Contact/fname/:firstName',contactController.getcontactbyfirstname)
router.get('/Contact/lname/:lastName',contactController.getcontactbysecondname)
router.get('/Contact/phone/:phone',contactController.getcontactbyphone)
router.post('/Contact/create',contactController.createcontact)
router.put('/Contact/:id',contactController.updatecontact)
router.delete('/Contact/:id',contactController.deletecontact)


module.exports= router