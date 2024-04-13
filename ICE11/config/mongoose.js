// Creating new users using save()
const mongoose = require('mongoose');
module.exports = function() {
    const db = mongoose.connect(config.db);
    require('../app/models/user.model');
    return db;
};