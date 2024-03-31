// import student model
const userModel = require('../models/user');

function loadUserData(req, res) {
    userModel.User.find({}).then(function(userList) {
        console.log(userList);
        res.render('./pages/user', {
            pageTitle: 'INFT 2202 - User List',
            users: userList
        })
    })
}

/**
 * renders student view
 * @param {*} req 
 * @param {*} res 
 */
function userView(req, res) {
    loadUserData(req, res);
}

// Exports
module.exports = {
    userView
};
