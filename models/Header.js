const mongoose = require("mongoose");
const headerSchema = new mongoose.Schema({
  logo: {
    alt: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
    },
  },
  greeting: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  mode: {
    lightMode: {
      height: {
        type: Number,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
      },
    },
    darkMode: {
      height: {
        type: Number,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
      },
    },
  },
});
const Header = mongoose.model("Header", headerSchema);
module.exports = Header;
