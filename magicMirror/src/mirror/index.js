var Mirror = require('./Mirror');
var FamousEngine = require('famous/core/FamousEngine');

FamousEngine.init();
FamousEngine.createScene().addChild(new Mirror());
