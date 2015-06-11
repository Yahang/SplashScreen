var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Scale = require('famous/components/Scale');
var Size = require('famous/components/size');
var Align = require('famous/components/Align');
var ButtonComp = require('./ButtonComp');

function TextButton(mount) {
    // Extend Node
    Node.call(this);

    this
        .setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(innerWidth*.2, innerWidth*.2)
        .setAlign(0.5, 0.9)
        .setMountPoint(0.5, 0.5)
        .setOrigin(0.5, 0.5);

    this.el = new DOMElement(this, { 
        classes: ['TextButton'],
        tagName: 'div',
        content: 'T',
        properties:{
            fontSize: innerWidth * .08+'px',
            textAlign: 'center',
            fontFamily: 'Baskerville',
            fontWeight: 'Bold',
            color: '#FF9933',
            zIndex: 32
        }
    });

    new ButtonComp(this);
}

// Extend the prototype
TextButton.prototype = Object.create(Node.prototype);

TextButton.prototype.animateFinal = function () {
    var alignComp = new Align(this);
    alignComp.set(0.2, 0.95, 0, {
        duration: 600,
        curve: 'outBounce'
    })

    var whiteSizeComponent = new Scale(this);
    whiteSizeComponent.set(1, 1, 1, {
        duration: 600,
        curve: 'outBounce'
    });
};

module.exports = TextButton;