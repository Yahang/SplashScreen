var famous = require('famous');
var Node = famous.core.Node;
var DOMElement = famous.domRenderables.DOMElement;
var Camera = require('./Camera');
var Video = require('./Video');

function Mirror(mount) {
    // Extend Node
    Node.call(this);
    this.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(innerWidth, innerHeight);
    makeCamera.call(this);
    makeVideo.call(this);
    handleKeyboard.call(this);
}

// Extend the prototype
Mirror.prototype = Object.create(Node.prototype);

function handleKeyboard() {
    this.keydownHandler = function (event) {
        if (event.keyCode == 32) {
            this.video.toggleMode();
            this.camera .toggleMode();
        } else if (event.keyCode == 39) {
        } else if (event.keyCode == 37) {
        } else if (event.keyCode == 38) {
            this.video.incr();
        } else if (event.keyCode == 40) {
            this.video.decr();
        }
    }.bind(this);

    window.addEventListener('keydown', this.keydownHandler);

}

// make the camera
function makeCamera () {
    window.camera = this.camera = new Camera();
    this.addChild(this.camera);
}

// make the video
function makeVideo () {
    window.video = this.video = new Video();
    this.addChild(this.video);
}

module.exports = Mirror;
