const Footer = require("../models/Footer");

// Get footer data
const getFooterData = async (req, res) => {
  try {
    const footerdata = await Footer.findOne({}, { _id: 0, __v: 0 });
    res.status(200).json(footerdata);
  } catch (error) {
    res.status(500).json({ message: "Error fetching header data", error });
  }
};

// create footer data
const createFooterData = async (req, res) => {
  try {
    const footerData = new Footer(req.body);
    await footerData.save();
    res.status(201).json({ message: "Footer data created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating footer data", error });
  }
};

module.exports = {
  getFooterData,
  createFooterData,
};
