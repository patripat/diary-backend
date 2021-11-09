var mongoose = require('mongoose');
var User = mongoose.model('User');

var postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['0', '1', '2'],
    default: '0',
    required: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
  }
}, { timestamps: true} );


const postModel = mongoose.model('Post', postSchema);
module.exports = { postModel };
