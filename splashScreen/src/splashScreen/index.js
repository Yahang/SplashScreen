var SplashScreen = require('./SplashScreen');
var FamousEngine = require('famous/core/FamousEngine');
//window.app = {
//    debug: true
//};

FamousEngine.init();
//create the app and pass in the target element
var splashScreen = FamousEngine.createScene().addChild(new SplashScreen());