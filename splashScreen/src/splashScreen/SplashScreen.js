var Node = require('famous/core/Node');
var DarkBody = require('./DarkBody');
var WhiteBody = require('./WhiteBody');
var LogoButton = require('./LogoButton');
var textButton = require('./TextButton');
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
    makeLogoButton.call(this);
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

function makeLogoButton(){
    this.logoButton = new LogoButton();
    this.addChild(this.logoButton);
}

function init() {
    this.darkBody.animateFull();
    // this.whiteBody.animateInit();
    animateCarousel.call(this);
    // animateApp.call(this);
    this.sound = new SoundEffect();
    // console.log(sound.b.b1);
    this.sound.loadSoundEffect().fan.play();
}

function animateCarousel() {
    clock.setTimeout(function(){
        this.logoButton.clockwise();
        this.darkBody.animateHalf();
        this.whiteBody.animateInit();
    }.bind(this),1300);
    clock.setTimeout(function(){
        this.logoButton.clockwise();
        this.darkBody.animateFull(); 
    }.bind(this),2500);
    clock.setTimeout(function(){
        this.logoButton.clockwise();
        this.darkBody.animateHalf();
    }.bind(this),3300);
    clock.setTimeout(function(){
        this.logoButton.clockwise();
        this.darkBody.animateFull();
    }.bind(this),4500);
    clock.setTimeout(function(){
        this.logoButton.counterclockwise();
        this.darkBody.animateHalf();
    }.bind(this),5300);
    clock.setTimeout(function(){
        animateApp.call(this);
    }.bind(this),6000);
}

function animateApp() {
    this.darkBody.animateFinal();
    this.whiteBody.animateFinal();
    this.logoButton.animateFinal();

    clock.setTimeout(function(){
        this.sound.loadSoundEffect().fan.stop();
    }.bind(this),600);
}

module.exports = SplashScreen;
