const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    id: Number,
    title: String,
    score: Number,
    viewCount: Number,
    commentCount: Number,
    creationDate: Date,
    answerCount: Number,
    tags: [String],
    ownerUserId: Number
  });
  
  // Compile model from schema
  const Post = mongoose.model('Post', PostSchema);
  
  module.exports = Post;