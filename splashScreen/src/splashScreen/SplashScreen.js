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

function makeDarkBody(node) {
	node.addChild(new DarkBody()).
		.setMountPoint(.5, 1)
		.setAlign(.5, 1)
		.setProportionalSize(1, 1);
}

module.exports = SplashScreen;
