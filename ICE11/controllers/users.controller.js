// Creating new users using save()
const User = require('mongoose').model('User');
exports.create = function(req, res, next) {
const user = new User(req.body);
user.save((err) => {
    if (err) {
        return next(err);
    } else {
        res.status(200).json(user);
    }
    });
};

// Finding multiple user documents using find()
exports.list = function(req, res, next) {
    User.find({}, (err, users) => {
    if (err) {
        return next(err);
    } else {
        res.status(200).json(users);
    }
    });
};