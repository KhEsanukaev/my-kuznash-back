const Carpets = require("../models/Carpet.model");

module.exports.carpetsController = {
  getCarpets: async (req, res) => {
    try {
      const carpets  = await Carpets.find().populate("categoryId");

      return res.json(carpets);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  addCarpets: async (req, res) => {
    const { image, name,  price, description, categoryId, } = req.body;

    try {
      const carpets = await Carpets.create({
        image,
        name,
        description,
        price,
        categoryId,
        
      });

      return res.json(carpets);
    } catch (e) {
      return res.status(401).json(e.message);
    }
  },

  deleteCarpets: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCarpets = await Carpets.findByIdAndDelete(id);
      if (!deleteCarpets) {
        return res.status(404).json({ message: "Carpets not found" });
      }const Carpets = require("../models/Carpet.model");

      module.exports.carpetsController = {
        getCarpets: async (req, res) => {
          try {
            const carpets = await Carpets.find().populate("categoryId");
            return res.json(carpets);
          } catch (e) {
            return res.status(500).json(e.message);
          }
        },
      
        addCarpets: async (req, res) => {
          const { image, name, price, description, categoryId } = req.body;
          try {
            const carpets = await Carpets.create({
              image,
              name,
              description,
              price,
              categoryId,
            });
            return res.json(carpets);
          } catch (e) {
            return res.status(500).json(e.message);
          }
        },
      
        deleteCarpets: async (req, res) => {
          const { id } = req.params;
          try {
            const deletedCarpets = await Carpets.findByIdAndDelete(id);
            if (!deletedCarpets) {
              return res.status(404).json({ message: "Carpets not found" });
            }
            return res.json({ message: "Carpets deleted successfully" });
          } catch (e) {
            return res.status(500).json({ message: "Internal server error" });
          }
        },
      }
      
      return res.json({ message: "Carpets deleted successfully" });
    } catch (e) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },



}  