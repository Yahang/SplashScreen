var Seed = require('./Seed');
var FamousEngine = require('famous/core/FamousEngine');

FamousEngine.init();
FamousEngine.createScene().addChild(new Seed());
