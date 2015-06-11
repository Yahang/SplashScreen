'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Mesh = require('famous/webgl-renderables/Mesh');
var Color = require('famous/utilities/Color');
// var PointLight = require('famous/webgl-renderables/PointLight');
var PointLight = require('famous/webgl-renderables/lights/PointLight');
var AmbientLight = require('famous/webgl-renderables/lights/AmbientLight');

// Constant value 
var numberOfSurfaces = 3;
var parentNodeSize = 200;

// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a MeshNode to the scene root
var scene = FamousEngine.createScene();
var inputNode = scene.addChild();
var testNode = scene.addChild();
var MeshNode = testNode.addChild();
var DomNode = testNode.addChild();

// Set up the light
var lightNode = testNode.addChild();
var light = new PointLight(lightNode);
lightNode
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(50, 50, 50)
        .setMountPoint(.5, .5, .5)  
        .setAlign(0.5, 0.5, 0.5)
        .setPosition(0, 700, 1000);
light.setColor(new Color('white'));

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
        MeshNode.removeChild(meshArray[i]);
        DomNode.removeChild(domArray[i]);
    }
    meshArray = [];
    domArray = [];
    numberOfSurfaces = parseInt(payload.value);
    draw(numberOfSurfaces);
};

// Rotate the testRode
testNode
    .setOrigin(0.5, 0.5)
    .setRotation(-Math.PI/4, 0, 0);

// Center the MeshNode
MeshNode
    .setAlign(0.25, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

DomNode
    .setAlign(0.75, 0.5)
    .setMountPoint(0.5, 0.5)
    .setOrigin(0.5, 0.5);

var meshArray = [];
var domArray = [];
draw(numberOfSurfaces);

// Add a spinner component to the MeshNode 'node' that is called, every frame
var spinner = MeshNode.addComponent({
    onUpdate: function(time) {
        MeshNode.setRotation(0, time / 1000, 0);
        MeshNode.requestUpdateOnNextTick(spinner);
    }
});
MeshNode.requestUpdate(spinner);

// Add a spinner component to the MeshNode 'node' that is called, every frame
var domSpinner = DomNode.addComponent({
    onUpdate: function(time) {
        DomNode.setRotation(0, time / 1000, 0);
        DomNode.requestUpdateOnNextTick(domSpinner);
    }
});
DomNode.requestUpdate(domSpinner);

// Create array of DOM element and attach them to MeshNode
function draw(numberOfSurfaces) {
    // Calculate the size of each surface
    var interiorAngle = Math.PI * (numberOfSurfaces-2) / numberOfSurfaces;
    var childNodeSize = parentNodeSize/Math.tan(interiorAngle/2);

    for (var i=0; i<numberOfSurfaces; i++) {
        var newNode = MeshNode.addChild();
        meshArray.push(newNode);

        var newDomNode = DomNode.addChild();
        domArray.push(newDomNode);
        new DOMElement(newDomNode, { 
            tagName: 'div',
            properties: {
                backgroundColor: "hsl(" + (i * 360 / numberOfSurfaces) + ", 100%, 50%)"
            }
        });
        var mesh = new Mesh(newNode);
        mesh.setGeometry('Plane');
        var hex = tinycolor("hsl(" + (i * 360 / numberOfSurfaces) + ", 100%, 50%)").toHex();
        var gloss = tinycolor("hsl(" + ((numberOfSurfaces-1-i) * 360 / numberOfSurfaces) + ", 100%, 50%)").toHex();
        mesh.setBaseColor(new Color("#" + hex))
            .setGlossiness(new Color("#" + gloss), 500);

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

        newDomNode
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
