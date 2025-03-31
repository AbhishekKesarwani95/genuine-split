const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  mobile: { type: String, unique: true },
  password: String,
  address:String,
  userCreateddate:Date,
  role: { type: String, enum: ["admin", "user","guest"], default: "user" },
  onlineStatus: { type: String, enum: ["online", "away", "offline"], default: "offline" },
});

module.exports = mongoose.model("User", UserSchema);
