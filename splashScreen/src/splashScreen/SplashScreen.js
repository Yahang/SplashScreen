var Node = require('famous/core/Node');
var DarkBody = require('./DarkBody');
var WhiteBody = require('./WhiteBody');

function SplashScreen(mount) {
    // Extend Node
    Node.call(this);
    makeDarkBody.call(this);
    makeWhiteBody.call(this);
    debug.call(this);
}

// Extend the prototype
SplashScreen.prototype = Object.create(Node.prototype);

SplashScreen.prototype.onMount = function onMount (parent, id) {
   Node.prototype.onMount.call(this, parent, id);
};

function debug() {
    if (typeof app == "object" && app.debug) {
        window.splashScreen = this;
    }
}

function makeDarkBody() {
    this.darkBody = new DarkBody();
	this.addChild(this.darkBody);
}

function makeWhiteBody() {
    this.whiteBody = new WhiteBody();
    this.addChild(this.whiteBody);
}

function init() {
    this.darkBody.animateInit();
    this.whiteBody.animateInit();
}
module.exports = SplashScreen;
