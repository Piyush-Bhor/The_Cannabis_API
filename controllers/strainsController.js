const request = require('request');
const Strain = require('../models/strainModel');

// Get Strain by ID
const getStrainById = (req, res) => {
  const objectId = req.params.strainID;
  Strain.findOne({ _id: objectId })
    .then((result) => {
      if (result) {
        return res.json(result);
      } else {
        return res.status(404).send('Strain not found');
      }
    })
    .catch((err) => {
      console.log('Error finding strain:', err);
      return res.status(500).send('Error finding strain');
    });
};

// Get Strain by Name
const getStrainByName = (req, res) => {
  const strain_name = req.params.strainName;
  Strain.findOne({ Strain : strain_name })
    .then((result) => {
      if (result) {
        return res.json(result);
      } else {
        return res.status(404).send('Strain not found');
      }
    })
    .catch((err) => {
      console.log('Error finding strain:', err);
      return res.status(500).send('Error finding strain');
    });
};

// Get Effects by ID
const getEffectsById = (req, res) => {
  const objectId = req.params.strainID;
  Strain.findOne({ _id: objectId })
    .then((result) => {
      if (result) {
        return res.json(result.Effects);
      } else {
        return res.status(404).send('Strain not found');
      }
    })
    .catch((err) => {
      console.log('Error finding strain:', err);
      return res.status(500).send('Error finding strain');
    });
};

// Get Flavours by ID
const getFlavorsByID = (req, res) => {
  const objectId = req.params.strainID;
  Strain.findOne({ _id: objectId })
      .then((result) => {
        if (result) {
          return res.json(result.Flavor);
        } else {
          return res.status(404).send('Strain not found');
        }
      })
      .catch((err) => {
        console.log('Error finding strain:', err);
        return res.status(500).send('Error finding strain');
    });
}

// Get all Flavours
const getAllFlavors = (req, res) => {
  Strain.find()
    .distinct('Flavor')
    .then((flavors) => {
      if (flavors && flavors.length > 0) {
        return res.json(flavors);
      } else {
        return res.status(404).send('No flavors found');
      }
    })
    .catch((err) => {
      console.log('Error retrieving flavors:', err);
      return res.status(500).send('Error retrieving flavors');
    });
};

// Get all Effects 
const getAllEffects = (req, res) => {
  Strain.find()
    .distinct('Effects')
    .then((effects) => {
      if (effects && effects.length > 0) {
        return res.json(effects);
      } else {
        return res.status(404).send('No effects found');
      }
    })
    .catch((err) => {
      console.log('Error retrieving effects:', err);
      return res.status(500).send('Error retrieving effects');
    });
};

// get Strains by Type
const getStrainsByType = (req, res) => {
  const strain_type = req.params.strainType;
  Strain.find({ Type : strain_type })
    .then((result) => {
      if (result) {
        return res.json(result);
      } else {
        return res.status(404).send('Strain not found');
      }
    })
    .catch((err) => {
      console.log('Error finding strain:', err);
      return res.status(500).send('Error finding strain');
    });
};

// get Strains by Effect
const getStrainsByEffect = (req, res) => {
  const strain_effects = req.params.strainEffect;
  Strain.find({ Effects : strain_effects })
    .then((result) => {
      if (result) {
        return res.json(result);
      } else {
        return res.status(404).send('Strain not found');
      }
    })
    .catch((err) => {
      console.log('Error finding strain:', err);
      return res.status(500).send('Error finding strain');
    });
};

// get Strains by Flavour
const getStrainsByFlavour = (req, res) => {
  const strain_flavours = req.params.strainFlavour;
  Strain.find({ Flavor : strain_flavours })
    .then((result) => {
      if (result) {
        return res.json(result);
      } else {
        return res.status(404).send('Strain not found');
      }
    })
    .catch((err) => {
      console.log('Error finding strain:', err);
      return res.status(500).send('Error finding strain');
    });
};

// get Similiar Strains
const getSimiliarStrains = (req,res) => {
  const strain_values = req.params.strainValues;
  
  const url = 'http://localhost:5000/predict';
  
  request.get({
    url: url,
    qs: {
      strain_values: strain_values
    }
  }, function (error, response, body) {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving similar strains.');
    } else {
      res.send(body);
    }
  });
};

module.exports = {
  getStrainById,
  getStrainByName,
  getEffectsById,
  getFlavorsByID,
  getAllFlavors,
  getAllEffects,
  getStrainsByType,
  getStrainsByFlavour,
  getStrainsByEffect,
  getSimiliarStrains,
};
