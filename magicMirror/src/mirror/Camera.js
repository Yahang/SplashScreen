var DOMElement = require('famous/dom-renderables/DOMElement');
var Node = require('famous/core/Node');
var Align = require('famous/components/Align');
var Size = require('famous/components/Size');

function Camera(mount) {
    // Extend Node
    Node.call(this);
    this.dom = new DOMElement(this, { 
	    tagName: 'video',
	    attributes: {
	    	width: '200%',
	    	height: '100%',
	    	autoplay: true,
	    	id: 'cameraVideo'
	    },
	    properties: {
            zIndex: 10
        }
	});
    this.setOpacity(1)
        .setProportionalSize(1, 1, 1)
        .setMountPoint(.5,.5)
        .setOrigin(.5,.5)
        .setRotation(0,Math.PI,0)
        .setScale(1.5,1.5);
	initWebCam.call(this);
    this.align = new Align(this);
    this.overlayMode();
}

Camera.prototype = Object.create(Node.prototype);

Camera.prototype.toggleMode = function toggleMode() {
    if (this.mode == 'side') {
        this.overlayMode();
    } else {
        this.sideMode();
    }
};

Camera.prototype.sideMode = function sideMode() {
    this.mode = 'side';
    this.align.set(.75,.5,0,{
        duration: 600,
        curve: 'outBounce'
    });
};

Camera.prototype.overlayMode = function overlayMode() {
    this.mode = 'overlay';
    this.align.set(.5,.5,0,{
        duration: 600,
        curve: 'outBounce'
    });
};

function initWebCam() {

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
	 
	if (navigator.getUserMedia) {       
	    navigator.getUserMedia({video: true}, handleVideo, videoError);
	}
	 
	function handleVideo(stream) {
		var video = document.querySelector("#cameraVideo");
	    video.src = window.URL.createObjectURL(stream);
	}
	 
	function videoError(e) {
	    // do something
	}
}

module.exports = Camera;