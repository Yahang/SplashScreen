var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');

function DarkBody(mount) {
    // Extend Node
    Node.call(this);

    this.setMountPoint(.5, 1)
        .setAlign(.5, 1)
        .setProportionalSize(1, 1);

    this.el = new DOMElement(this, { 
        classes: ['darkBody'],
        tagName: 'div',
        properties: {
            backgroundColor: "black",
            zIndex: 20
        }
    });
}

// Extend the prototype
DarkBody.prototype = Object.create(Node.prototype);

DarkBody.prototype.animateInit = function () {
    this.setProportionalSize(1, 1);
};

DarkBody.prototype.animateHalf = function () {
   this.setProportionalSize(1, .5);
};

DarkBody.prototype.animateFinal = function () {
   this.setProportionalSize(.96, .9);
};

module.exports = DarkBody;
