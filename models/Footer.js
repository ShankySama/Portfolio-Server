const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
  icon: { type: String, required: true },
  size: { type: Number, required: true },
  alt: { type: String, required: true },
});
const footerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  profiles: [profileSchema],
});

const Footer = mongoose.model("footer", footerSchema);

module.exports = Footer;
