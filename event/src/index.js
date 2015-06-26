'use strict';
var famous = require('famous');

// Famous dependencies
var DOMElement = famous.domRenderables.DOMElement;
var FamousEngine = famous.core.FamousEngine;

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var scene = FamousEngine.createScene();
var logo = scene.addChild();
var logo2 = logo.addChild();
var logo3 = logo2.addChild();
var logo4 = logo3.addChild();
var logo5 = logo4.addChild();

// Create an [image] DOM element providing the logo 'node' with the 'src' path
new DOMElement(logo, { tagName: 'div' })
    .setContent('logo');
new DOMElement(logo2, { tagName: 'div' })
    .setContent('logo2');
new DOMElement(logo3, { tagName: 'div' })
    .setContent('logo3');
new DOMElement(logo4, { tagName: 'div' })
    .setContent('logo4');
new DOMElement(logo5, { tagName: 'div' })
    .setContent('logo5');

// Chainable API
logo
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(100, 100)
    .setAlign(0.5, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

logo2
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(100, 100)
    .setAlign(0.5, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

logo3
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(100, 100)
    .setAlign(0.5, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

logo4
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(100, 100)
    .setAlign(0.5, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

logo5
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(100, 100)
    .setAlign(0.5, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);


// emit going downward
// UIEvent going upward

logo3.addUIEvent('click');
logo.onReceive = function onReceive(e, p) {
    console.log(e, p, 'logo');  
}
logo2.onReceive = function onReceive(e, p) {
    console.log(e, 'logo2');  
}
logo3.onReceive = function onReceive(e, p) {
    console.log(e, 'logo3');  
}
logo4.onReceive = function onReceive(e, p) {
    console.log(e, 'logo4');  
}
logo5.onReceive = function onReceive(e, p) {
    console.log(e, 'logo5');  
}