const mongoose = require('mongoose');
const Strain = require('../../models/strainModel');

mongoose.set("strictQuery", false);
const url = process.env.CONNECTIONSTRING;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  }
}

module.exports = async (req, res) => {
  await connectToDatabase();

  const strainFlavour = req.query.strainFlavour;

  try {
    const strains = await Strain.find({ Flavor: strainFlavour });
    if (strains.length > 0) {
      return res.status(200).json(strains);
    } else {
      return res.status(404).send('Strain not found');
    }
  } catch (error) {
    console.error('Error finding strain:', error);
    return res.status(500).send('Error retrieving strains');
  }
};
