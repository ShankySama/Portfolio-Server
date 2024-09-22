const Header = require("../models/Header");

// Get header data
const getHeaderData = async (req, res) => {
  try {
    const headerData = await Header.findOne({}, { _id: 0, __v: 0 });
    res.status(200).json(headerData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching header data", error });
  }
};

// Create header data
const createHeaderData = async (req, res) => {
  try {
    const headerData = new Header(req.body);
    await headerData.save();
    res.status(201).json({ message: "Header data created" });
  } catch (error) {
    console.log(error, "ERRO");
    res.status(500).json({ message: "Error creating header data", error });
  }
};

module.exports = { getHeaderData, createHeaderData };
