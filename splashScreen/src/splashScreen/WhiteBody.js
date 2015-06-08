var Node = require('famous/core/Node');

function WhiteBody(mount) {
    // Extend Node
    Node.call(this);
}


// Extend the prototype
WhiteBody.prototype = Object.create(Node.prototype);

