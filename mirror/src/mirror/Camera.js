var DOMElement = require('famous/dom-renderables/DOMElement');
var Node = require('famous/core/Node');

function Camera(mount) {
    // Extend Node
    Node.call(this);
    this.dom = new DOMElement(this, { 
	    tagName: 'video',
	    attributes: {
	    	width: '100%',
	    	height: '100%',
	    	autoplay: true,
	    	id: 'cameraVideo'
	    },
	    properties: {
            zIndex: 20
        }
	});
	initWebCam.call(this);
}

Camera.prototype = Object.create(Node.prototype);

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