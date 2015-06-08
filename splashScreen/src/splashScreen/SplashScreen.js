var Node = require('famous/core/Node');

function SplashScreen(mount) {
    // Extend Node
    Node.call(this);
}

// Extend the prototype
SplashScreen.prototype = Object.create(Node.prototype);

SplashScreen.prototype.onMount = function onMount (parent, id) {
   Node.prototype.onMount.call(this, parent, id);
};

module.exports = SplashScreen;
