const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/college');

// mongoose.set('useCreateIndex', true);

// User schema
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    friends: [String],
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    }
});

// Export schemas as models
module.exports.Student = mongoose.model('user', userSchema);