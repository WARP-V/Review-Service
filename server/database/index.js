const mongoose = require('mongoose');

const dbConnection = mongoose.connect('mongodb://localhost:27017/nike', { useNewUrlParser: true });

module.exports.dbConnection = dbConnection;
