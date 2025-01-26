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

  try {
    const effects = await Strain.distinct('Effects');
    if (effects && effects.length > 0) {
      return res.status(200).json(effects);
    } else {
      return res.status(404).send('No effects found');
    }
  } catch (error) {
    console.error('Error retrieving effects:', error);
    return res.status(500).send('Error retrieving effects');
  }
};
