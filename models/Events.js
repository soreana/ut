/**
 * Created by sosin-PC on 8/16/2016.
 */

var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  title:String,
  date:Date,
  description:String,
  pictureId:String
});

mongoose.model('Event', EventSchema);
