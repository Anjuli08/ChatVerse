//what is it going to have?:
//chatName
//isGroupChat
//users
//latestMessage
//groupAdmin

const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    //define obj
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
