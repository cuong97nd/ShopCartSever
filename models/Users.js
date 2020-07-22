const mongoose = require('mongoose');
const findOrCreate = require ('mongoose-findorcreate')
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  sub : { type : Number  },
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }  
});

usersSchema.plugin(findOrCreate);

module.exports = mongoose.model('users', usersSchema);