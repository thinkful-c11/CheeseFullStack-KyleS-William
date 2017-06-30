'use strict';

const mongoose = require('mongoose');

const cheesesSchema = mongoose.Schema({
  cheese:{type:String, required:true}
});

const Cheese = mongoose.model('Cheese',cheesesSchema);

module.exports= {Cheese};