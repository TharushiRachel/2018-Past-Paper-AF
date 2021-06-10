const express = require('express');
const router = express.Router();
const controller = require('../controllers/subject.controller');

module.exports=function(){
    router.post('/create',controller.createSubject);
    router.get('/',controller.getSubject);
    router.put('/update/:id',controller.updateSubject);
    return router;
}