var Node = require('famous/core/Node');

function LogoButton(mount) {
    // Extend Node
    Node.call(this);

    this
   	 .setAlign(0.5, 0.5)
     .setMountPoint(0.5, 0.5)
     .setOrigin(0.5, 0.5);

    this.el = new DOMElement(this, { 
        classes: ['LogoButton'],
        tagName: 'img',
        properties:{
            content: "assets/imgs/logo/logo_bg.png",
            zIndex: 20
        }
    });
}

LogoButton.prototype = Object.create(Node.prototype);

LogoButton.prototype.createLogoButton = function () {
	
};

module.exports = LogoButton;