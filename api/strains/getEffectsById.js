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

  const strainId = req.query.strainID;

  try {
    const strain = await Strain.findById(strainId);
    if (strain) {
      return res.status(200).json(strain.Effects);
    } else {
      return res.status(404).send('Strain not found');
    }
  } catch (error) {
    console.error('Error finding strain:', error);
    return res.status(500).send('Error retrieving strain');
  }
};
