var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Size = require('famous/components/Size');

function DarkBody(mount) {
    // Extend Node
    Node.call(this);

    this.el = new DOMElement(this, { 
        classes: ['darkBody'],
        tagName: 'div',
        properties:{
            backgroundColor: "black",
            zIndex: 20
        }
    });
}

// Extend the prototype
DarkBody.prototype = Object.create(Node.prototype);

DarkBody.prototype.animateFull = function () {
    this.setMountPoint(.5, 1)
        .setAlign(.5, 1)
        .setProportionalSize(1, 1);
};

DarkBody.prototype.animateHalf = function () {
   this.setMountPoint(.5, 1)
        .setAlign(.5, 1)
        .setProportionalSize(1, .5);
};

DarkBody.prototype.animateFinal = function () {
    var gap = 10;
    var headerHeight = 100;
    var y = (innerHeight - gap)/innerHeight;
    var w = (innerWidth-2*gap)/innerWidth;
    var h = (innerHeight - gap - headerHeight)/innerHeight;
    this.setMountPoint(.5, 1)
        .setAlign(.5, y)
    var darksizeComponent = new Size(this);
    darksizeComponent.setProportional(w, h, 0, {
        duration: 600,
        curve: 'outBounce'
    });
};

module.exports = DarkBody;
