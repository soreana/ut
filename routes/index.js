var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tag = mongoose.model('Tag');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/tag', function(req, res, next) {
  var tag = new Tag(req.body);

  tag.save(function(err, tag){
    if(err){ return next(err); }

    res.json(tag);
  });
});

router.get('/tags',function (req,res,next){
  Tag.find(function (err,tags) {
    if(err) {return next(err)}
    res.json(tags);
  });
});

module.exports = router;
