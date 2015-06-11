var Node = require('famous/core/Node');
var DOMElement = require('famous/dom-renderables/DOMElement');
var Transitionable = require('famous/transitions/Transitionable');
//var Position = require('famous/components/Position');
var Scale = require('famous/components/Scale');
var Size = require('famous/components/size');
var Align = require('famous/components/Align');
var ButtonComp = require('./ButtonComp');
var SoundEffect = require('./SoundEffect');

var angle = 0;
var angleTransitionable = new Transitionable(angle);

function LogoButton(mount) {
    // Extend Node
    Node.call(this);
    this
    	.setSizeMode('absolute', 'absolute')
		.setAbsoluteSize(100, 100)
		.setAlign(0.5, 0.5)
    	.setMountPoint(0.5, 0.5)
    	.setOrigin(0.5, 0.5);

    this.createLogoButton();
    this.sound = new SoundEffect();
    
}

LogoButton.prototype = Object.create(Node.prototype);

LogoButton.prototype.createLogoButton = function () {
	this.logoButtonBg = this.addChild();

	this.logoButtonBg
		//.setSizeMode('absolute', 'absolute')
		//.setAbsoluteSize(100, 100)
		.setAlign(0.5, 0.5)
    	.setMountPoint(0.5, 0.5)
    	.setOrigin(0.5, 0.5);

	var logoButtonEl1 = new DOMElement(this.logoButtonBg,{
		classes: ['LogoButtonBg'],
		tagName: 'img',
		properties:{
             zIndex: 30
        }
	}).setAttribute('src', 'assets/imgs/logo/logo_bg.png');


	this.logoButtonFg = this.addChild();
    new ButtonComp(this.logoButtonFg);
    // new ButtonComp(this.logoButtonBg);

	this.logoButtonFg
		//.setSizeMode('absolute', 'absolute')
		//.setAbsoluteSize(100, 100)
		.setAlign(0.5, 0.5)
    	.setMountPoint(0.5, 0.5)
    	.setOrigin(0.5, 0.5);

    var logoButtonEl2 = new DOMElement(this.logoButtonFg,{
		classes: ['LogoButtonFg'],
		tagName: 'img',
		properties:{
             zIndex: 30
        }
    }).setAttribute('src', 'assets/imgs/logo/logo_fg.png');

    this.setSpinner();
};

LogoButton.prototype.setSpinner = function () {
	var spinner = this.logoButtonFg.addComponent({
        onUpdate: function() {
            this.logoButtonFg.setRotation(0, 0, angleTransitionable.get());
            this.logoButtonFg.requestUpdateOnNextTick(spinner);
        }.bind(this)
    });
    this.logoButtonFg.requestUpdate(spinner);
};

LogoButton.prototype.clockwise = function (){
	angle = angle+2*Math.PI/30;
    angleTransitionable.set(angle, {
        duration: 1000,
        curve: 'inOutBounce'
    });
    this.sound.loadSoundEffect().slide.play();
};

LogoButton.prototype.counterclockwise = function (){
	angle = angle-2*Math.PI/30;
    angleTransitionable.set(angle, {
        duration: 1000,
        curve: 'inOutBounce'
    });
    this.sound.loadSoundEffect().slide.play();
};

LogoButton.prototype.animateFinal = function (){
	var alignComp = new Align(this);
	alignComp.set(0.5, 0.9, 0, {
		duration: 600,
		curve: 'outBounce'
	})

    var whiteSizeComponent = new Scale(this);
    whiteSizeComponent.set(0.8, 0.8, 1, {
    	duration: 600,
    	curve: 'outBounce'
    });
};

module.exports = LogoButton;