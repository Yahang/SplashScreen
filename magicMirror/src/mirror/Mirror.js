var Node = require('famous/core/Node');
var Camera = require('./Camera');
var Video = require('./Video');

function Mirror(mount) {
    // Extend Node
    Node.call(this);
    this.setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(innerWidth, innerHeight);
    makeCamera.call(this);
    makeVideo.call(this);
}

// Extend the prototype
Mirror.prototype = Object.create(Node.prototype);

// make the camera
function makeCamera () {
    this.camera = new Camera();
    this.addChild(this.camera);
    this.camera.setOpacity(.5)
        .setProportionalSize(1, 1, 1);
}

// make the video
function makeVideo () {
    this.video = new Video();
    this.addChild(this.video);
    this.video.setOpacity(1)
        .setProportionalSize(1, 1, 1);
}

module.exports = Mirror;
