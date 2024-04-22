const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const newSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 100,
    },
    last: {
      type: String,
      required: true,
      max_length: 12,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    Username: {
      type: String,
      required: true,
      max_length: 50,
    },



    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const userSchema = model('User', userSchema);

module.exports =User ;
