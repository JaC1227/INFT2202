const crypto = require('crypto');

// GENERATE A PASSWORD TO SAVE TO THE DATABASE -POSTREGISTER IN USERCONTROLLER.JS USES THIS

function generatePassword(password) {
    const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex'); // Generate hash using PBKDF2
    return {
        salt: salt,
        hash: hash
    };
}

// RETRIEVE THE PASSWORD AND CHECK WITH THE SAME HASH APPLIED TO LOGIN PASSWORD - VERIFYCALLBACK IN PASSPORT.JS USES THIS

function validPassword(password, salt, hash) {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex'); // Generate hash using input password and saved salt
    return hash === hashVerify;
}

module.exports = { generatePassword, validPassword };
