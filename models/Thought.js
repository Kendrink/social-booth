const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 500,
      minlength: 6,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  });


thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length});
