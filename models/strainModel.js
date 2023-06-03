const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StrainSchema = new Schema({
    Strain : {
        type : String,
        required : true
    },
    Type : {
        type : String,
        required : true
    },
    Rating : {
        type : Number,
        required : false
    },
    Effects : {
        type : String,
        required : true
    },
    Flavor : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('Strain', StrainSchema);