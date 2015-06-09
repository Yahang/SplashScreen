var Node = require('famous/core/Node');
var DarkBody = require('./DarkBody');
var WhiteBody = require('./WhiteBody');
var FamousEngine = require('famous/core/FamousEngine');
var clock = FamousEngine.getClock();
var SoundEffect = require('./SoundEffect');

function SplashScreen(mount) {
    // Extend Node
    Node.call(this);
    this.setSizeMode('absolute', 'absolute')
        .setAbsoluteSize(innerWidth, innerHeight);
    makeDarkBody.call(this);
    makeWhiteBody.call(this);
    debug.call(this);
    init.call(this);
}

// Extend the prototype
SplashScreen.prototype = Object.create(Node.prototype);

// SplashScreen.prototype.onMount = function onMount (parent, id) {
//    Node.prototype.onMount.call(this, parent, id);
// };

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
    this.darkBody.animateFull();
    // this.whiteBody.animateInit();
    animateCarousel.call(this);
    // animateApp.call(this);
    this.sound = new SoundEffect();
    // console.log(sound.b.b1);
    this.sound.loadSoundEffect().fan.play();
    console.log(this.sound.loadSoundEffect().fan);
}

function animateCarousel() {
    clock.setTimeout(function(){
        this.darkBody.animateHalf();
        this.whiteBody.animateInit();
    }.bind(this),1300);
    clock.setTimeout(function(){
        this.darkBody.animateFull();
    }.bind(this),2500);
    clock.setTimeout(function(){
        this.darkBody.animateHalf();
    }.bind(this),3300);
    clock.setTimeout(function(){
        this.darkBody.animateFull();
    }.bind(this),4500);
    clock.setTimeout(function(){
        this.darkBody.animateHalf();
    }.bind(this),5300);
    clock.setTimeout(function(){
        animateApp.call(this);
    }.bind(this),6000);
}

function animateApp() {
    this.darkBody.animateFinal();
    this.whiteBody.animateFinal();
    clock.setTimeout(function(){
        this.sound.loadSoundEffect().fan.stop();
    }.bind(this),600);
}

module.exports = SplashScreen;
