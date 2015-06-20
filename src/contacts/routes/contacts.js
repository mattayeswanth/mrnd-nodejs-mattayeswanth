var express = require('express');
var router = express.Router();
var data = new Array();
var mes = new Array();
var i = -1;

/* GET contacts */
router.get('/:id', function (req, res, next) {
    res.status(200);
    id=req.params.id;
    id = parseInt(id);
    res.json(data[i]);
    res.send();
});

router.post('/', function(req, res, next) {
    res.status(200);
    i = i + 1;
    data[i] = req.body;
    res.json(i);
    res.send();
});

router.put('/:id', function(req, res, next) {
    res.status(200);
    id = parseInt(req.params.id);
    data[i].firstName = req.body.firstName;
    res.json(data[i]);
    res.send();

});

router.post('/:id', function (req, res, next) {
    res.status(200);
    console.log(req.body);
    id = parseInt(req.params.id);
    mes[id] = req.body;
    res.send();
});


router.get('/:id/ask', function (req, res, next) {
    res.status(200);
    id = parseInt(req.params.id);
    res.json(mes[id]);
    res.send();
});

module.exports = router;
