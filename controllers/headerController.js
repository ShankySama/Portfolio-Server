const Header = require("../models/Header");

// Get header data
const getHeaderData = async (req, res) => {
  try {
    const headerData = await Header.find();
    res.status(200).json(headerData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching header data", error });
  }
};

// Create header data
const createHeaderData = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: "Error fetching header data", error });
  }
};

module.exports = { getHeaderData, createHeaderData };
