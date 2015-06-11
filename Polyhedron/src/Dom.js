'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

// Constant value 
var numberOfSurfaces = 3;
var parentNodeSize = 250;

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a spinNode to the scene root
var scene = FamousEngine.createScene();
var inputNode = scene.addChild();
var testNode = scene.addChild();
var spinNode = testNode.addChild();

// Create the input node and attach 'keyup', 'change' UIEvent to it.
new DOMElement(inputNode, { 
    tagName: 'input',
    attributes: {
        type: 'number',
        min: '3',
        max: '400',
        value: numberOfSurfaces
    }
});
inputNode.setSizeMode('absolute', 'absolute', 'absolute').setAbsoluteSize(100, 30);
inputNode.addUIEvent('keyup');
inputNode.addUIEvent('change');
inputNode.onReceive = function onReceive (event, payload) {
    for (var i=0; i<numberOfSurfaces; i++) {
        spinNode.removeChild(spinArray[i]);
    }
    spinArray = [];
    numberOfSurfaces = parseInt(payload.value);
    draw(numberOfSurfaces);
};

// Rotate the testRode
testNode
    .setAlign(0.5, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5)
    .setRotation(-Math.PI/4, 0, 0);

// Center the spinNode
spinNode
    .setAlign(0.5, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

var spinArray = [];
window.spinArray = spinArray;
draw(numberOfSurfaces);

// Add a spinner component to the spinNode 'node' that is called, every frame
var spinner = spinNode.addComponent({
    onUpdate: function(time) {
        spinNode.setRotation(0, time / 1000, 0);
        spinNode.requestUpdateOnNextTick(spinner);
    }
});

// Let the magic begin...
spinNode.requestUpdate(spinner);

// Create array of DOM element and attach them to spinNode
function draw(numberOfSurfaces) {
    // Calculate the size of each surface
    var interiorAngle = Math.PI * (numberOfSurfaces-2) / numberOfSurfaces;
    var childNodeSize = parentNodeSize/Math.tan(interiorAngle/2);

    for (var i=0; i<numberOfSurfaces; i++) {
        var newNode = spinNode.addChild();
        spinArray.push(newNode);
        new DOMElement(newNode, { 
            tagName: 'div',
            properties: {
                backgroundColor: "hsl(" + (i * 360 / numberOfSurfaces) + ", 100%, 50%)"
            }
        });

        newNode
            // Set size mode to 'absolute' to use absolute pixel values
            .setSizeMode('absolute', 'absolute', 'absolute')
            .setAbsoluteSize(childNodeSize, parentNodeSize, parentNodeSize)
            // Center the 'node' to the parent (the screen, in this instance)
            .setAlign(0.5, 0.5, 0.5)
            // Set the translational origin to the center of the 'node'(depth=0 in this case)
            .setMountPoint(0.5, 0.5, 0)
            // Set the rotational origin to the center of the 'node'(depth=0 in this case)
            .setOrigin(0.5, 0.5, 0)
            .setRotation(0, i*2*Math.PI/numberOfSurfaces, 0);
    }  
}
