const express = require('express');
const router = express.Router();
const strainsController = require('../controllers/strainsController');

// Get Strain by ID
router.get('/getStrainsById/:strainID', strainsController.getStrainById);

// Get Strains by Name
router.get('/getStrainsByName/:strainName', strainsController.getStrainByName);

// Get Strains by Type
router.get('/getStrainsByType/:strainType', strainsController.getStrainsByType);

// Get Strains by Effects
router.get('/getStrainsByEffect/:strainEffect', strainsController.getStrainsByEffect);

// Get Strains by Flavours
router.get('/getStrainsByFlavour/:strainFlavour', strainsController.getStrainsByFlavour);

// Get Effects by ID
router.get('/getEffectsByStrainId/:strainID', strainsController.getEffectsById);

// Get Flavors by ID
router.get('/getFlavorsByStrainId/:strainID', strainsController.getFlavorsByID);

// Get All Flavors
router.get('/getAllFlavors', strainsController.getAllFlavors);

// Get All Effects
router.get('/getAllEffects', strainsController.getAllEffects);

// Get Similiar Strains
router.get('/getSimiliarStrains/:strainValues', strainsController.getSimiliarStrains);

module.exports = router;