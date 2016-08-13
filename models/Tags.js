/**
 * Created by sosin-PC on 8/13/2016.
 */

var mongoose = require('mongoose');

var TagSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Tag', TagSchema);
