var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Position = require('famous/components/Position');
var FamousEngine = require('famous/core/FamousEngine');
var clock = FamousEngine.getClock();

function WhiteBody(mount) {
    // Extend Node
    Node.call(this);

    this
   	 .setAlign(0.5, 0.5)
     .setMountPoint(0.5, 0.5)
     .setOrigin(0.5, 0.5);

    this.el = new DOMElement(this, { 
        classes: ['whiteBody'],
        tagName: 'div',
        properties: {
            backgroundColor: "#FFFFCC",
            zIndex: 30
        }
    });

   this.titleNode = this.addChild();

   this.titleNode
   	.setSizeMode('absolute', 'absolute')
    .setAbsoluteSize(200, 100)
    .setScale(1,1)
   	.setAlign(0.5, 0.25)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

    var titleElement = new DOMElement(this.titleNode, {
    	tagName: 'h1',
    	content: "Carousel"
    });

    //this.animateFinal();
}

// Extend the prototype
WhiteBody.prototype = Object.create(Node.prototype);

WhiteBody.prototype.animateInit = function () {
	this.setProportionalSize(1, 1);
};

WhiteBody.prototype.animateFinal = function () {
	this.titleNode
   	.setSizeMode('absolute', 'absolute')
    .setAbsoluteSize(100, 50)
    .setScale(0.5,0.5)
   	.setAlign(0.5, 0.05)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);
};

function debug(){

}

module.exports = WhiteBody;