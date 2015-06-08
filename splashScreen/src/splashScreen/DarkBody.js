var Node = require('famous/core/Node');

function DarkBody(mount) {
    // Extend Node
    Node.call(this);
}

// Extend the prototype
DarkBody.prototype = Object.create(Node.prototype);

DarkBody.prototype.animateInit = function animateInit () {
   
};

DarkBody.prototype.animateFull = function animateFull () {
   
};

DarkBody.prototype.animateFinal = function animateFinal () {
   
};

module.exports = DarkBody;
