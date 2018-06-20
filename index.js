var Nebrella = require('./lib/nebrella');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Nebrella === 'undefined') {
    window.Nebrella = Nebrella;
}

module.exports = Nebrella;
