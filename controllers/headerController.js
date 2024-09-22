const Header = require("../models/Header");
const multer = require("multer");
const path = require("path");

// Multer Config for multiple fields
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Save to 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with timestamp
  },
});

const upload = multer({ storage });

// Get header data
const getHeaderData = async (req, res) => {
  try {
    const headerData = await Header.findOne({}, { _id: 0, __v: 0 });
    res.status(200).json(headerData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching header data", error });
  }
};

// Create header data with 3 separate image uploads
const createHeaderData = async (req, res) => {
  upload.fields([
    { name: "logoIcon", maxCount: 1 },
    { name: "lightModeIcon", maxCount: 1 },
    { name: "darkModeIcon", maxCount: 1 },
  ])(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: "Error uploading images.", error: err });
    }

    try {
      const logoIconUrl = req.files["logoIcon"] ? `/uploads/${req.files["logoIcon"][0].filename}` : null;
      const lightModeIconUrl = req.files["lightModeIcon"] ? `/uploads/${req.files["lightModeIcon"][0].filename}` : null;
      const darkModeIconUrl = req.files["darkModeIcon"] ? `/uploads/${req.files["darkModeIcon"][0].filename}` : null;

      const headerData = new Header({
        ...req.body,
        logo: {
          ...req.body.logo,
          icon: logoIconUrl,
        },
        mode: {
          lightMode: {
            ...req.body.mode.lightMode,
            icon: lightModeIconUrl,
          },
          darkMode: {
            ...req.body.mode.darkMode,
            icon: darkModeIconUrl,
          },
        },
      });
      await headerData.save();
      res.status(201).json({ message: "Header data created" });
    } catch (error) {
      res.status(500).json({ message: "Error creating header data", error });
    }
  });
};

module.exports = { getHeaderData, createHeaderData };
