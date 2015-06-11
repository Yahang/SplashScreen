var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Scale = require('famous/components/Scale');
var Size = require('famous/components/size');
var Align = require('famous/components/Align');

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
            backgroundColor: "#F8F8F8",
            zIndex: 10
        }
    });

   this.titleNode = this.addChild();

   this.titleNode
   	.setSizeMode('absolute', 'absolute')
    .setAbsoluteSize(innerWidth, 50)
    .setScale(1,1)
   	.setAlign(0.5, 0.25)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

    var titleElement = new DOMElement(this.titleNode, {
    	classes: ["appTitle"],
    	tagName: 'div',
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
	var alignComp = new Align(this.titleNode);
	alignComp.set(0.5, 0.055, 0, {
		duration: 600,
		curve: 'outBounce'
	})

    var whiteSizeComponent = new Scale(this.titleNode);
    whiteSizeComponent.set(0.5, 0.5, 1, {
    	duration: 600,
    	curve: 'outBounce'
    });
};

function debug(){

}

module.exports = WhiteBody;