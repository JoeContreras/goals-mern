const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name field"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please add a email field"],
    },
    password: {
      type: String,
      required: [true, "Please add a name field"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
