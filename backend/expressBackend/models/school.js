const mongoose = require('mongoose');
const schoolSchema = mongoose.Schema({
    title: {type: String},
    year: {type: String},
    city: {type: String},
    county: {type: String},
    history: {type: String},
    schoolType: {type: String}
})

module.exports = mongoose.model('School', schoolSchema);