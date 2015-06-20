var express = require('express');
var router = express.Router();
var fs = require('fs');

var i = -1;

/* GET contacts */
router.get('/:id', function (req, res, next) {
    res.status(200);
    id=req.params.id;
    id = parseInt(id);
    //var filename = "./data//" + id + "-Contact.json";
    var filename = "C://Users//user//Downloads//mrnd-nodejs-master (1)//mrnd-nodejs-master//spec//tests//data//" + id + "-Contact.json";
    var data = JSON.parse((fs.readFileSync(filename)));
    res.send(data);
});

router.post('/', function (req, res, next) {
    res.status(200);
    i = i + 1;
    var filename = "C://Users//user//Downloads//mrnd-nodejs-master (1)//mrnd-nodejs-master//spec//tests//data//" + i + "-Contact.json";
    fs.open(filename, 'w');
    var data = JSON.stringify(req.body);
    fs.writeFile(filename, data);
    res.json(i);
    res.send();
});

router.put('/:id', function (req, res, next) {
    res.status(200);
    id = parseInt(req.params.id);
    var filename = "C://Users//user//Downloads//mrnd-nodejs-master (1)//mrnd-nodejs-master//spec//tests//data//" + id + "-Contact.json";
    var contact = JSON.parse((fs.readFileSync(filename)));
    contact.firstName = req.body.firstName;
    var contacts = JSON.stringify(contact);
    fs.open(filename, 'w');
    fs.writeFile(filename, contacts);
    res.json(contact);
    res.send();
    
});

router.post('/:id', function (req, res, next) {
    res.status(200);
    id = parseInt(req.params.id);
    var filename = "C://Users//user//Downloads//mrnd-nodejs-master (1)//mrnd-nodejs-master//spec//tests//data//" + id +"messages"+ "-Contact.json";
    fs.open(filename, 'w');
    var data = JSON.stringify(req.body);
    fs.appendFile(filename, data);
    res.send();
});

router.get('/:id/ask', function (req, res, next) {
    res.status(200);
    id = parseInt(req.params.id);
    var filename = "C://Users//user//Downloads//mrnd-nodejs-master (1)//mrnd-nodejs-master//spec//tests//data//" + id +"messages"+ "-Contact.json";
    fs.open(filename, 'r');
    var data = JSON.parse(fs.readFileSync(filename));
    res.json(data);
    res.send();
});
module.exports = router;
