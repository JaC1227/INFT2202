// Creating new users using save()
require('../../app/controllers/users.controller');
module.exports = function(app) {
    app.route('/users').post(users.create);
};

// Finding multiple user documents using find()
require('../../app/controllers/users.controller');
module.exports = function(app) {
    app.route('/users')
    .post(users.create)
    .get(users.list);
};
