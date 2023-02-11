const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        "Please provide a valid email.",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    phone: {
      type: Number,
    },
    announcement: [
      {
        type: Schema.Types.ObjectId,
        ref: "Announcement",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
