var DOMElement = require('famous/dom-renderables/DOMElement');
var Node = require('famous/core/Node');
var Clock = require('famous/core/Clock');
var Align = require('famous/components/Align');
var Size = require('famous/components/Size');
var Opacity = require('famous/components/Opacity');

function Video(mount) {
    // Extend Node
    Node.call(this);
    this.src = '5S-1QGKYxuk';
    this.dom = new DOMElement(this, { 
	    tagName: 'div',
        content: '<iframe width="'+innerWidth *.8+'" height="100%" src="http://www.youtube.com/embed/' + this.src + '"?rel=0&autoplay=1 frameborder="0"></iframe>',
	    properties: {
            textAlign: 'center',
            overflow: 'hidden',
            zIndex: 20
        }
	});
    this.setOpacity(1)
        .setProportionalSize(1, 1, 1)
        .setMountPoint(.5,.5)
        .setOrigin(.5,.5);
    this.align = new Align(this);
    this.size = new Size(this);
    this.opacity = new Opacity(this);
    this.overlayMode();
    this.clock = new Clock();
    makeInput.call(this);
    setInterval(function(){
        window.focus();
    }, 1000);
}

Video.prototype = Object.create(Node.prototype);

function makeInput () {
    this.inputNode = this.addChild();
    this.inputNode.setSizeMode('absolute', 'absolute', 'absolute').setAbsoluteSize(100, 30);
    // this.inputNode.addUIEvent('paste');
    new DOMElement(this.inputNode, { 
        tagName: 'input',
        attributes: {
            id: 'youtubeInput',
            type: 'text',
            value: '5S-1QGKYxuk'
        },
        properties: {
            zIndex: 50
        }
    });
    handleEvent.call(this);
}

function handleEvent() {
    setTimeout(function(){
        $("#youtubeInput").on("paste", function(e) {
            this.dom.setContent('<iframe width="'+innerWidth *.8+'" height="100%" src="http://www.youtube.com/embed/' + $("#youtubeInput").val() + '"?rel=0&autoplay=1 frameborder="0"></iframe>');
        }.bind(this) );
    }.bind(this), 100);
}

Video.prototype.incr = function incr() {
    var o = this.getOpacity();
    o = Math.max(0, o - .02);
    this.setOpacity(o);
};

Video.prototype.decr = function incr() {
    var o = this.getOpacity();
    o = Math.min(1, o + .02);
    this.setOpacity(o);
};

Video.prototype.toggleMode = function toggleMode() {
    if (this.mode == 'side') {
        this.overlayMode();
    } else {
        this.sideMode();
    }
};

Video.prototype.sideMode = function sideMode() {
    this.mode = 'side';
    var transition = {
        duration: 600,
        curve: 'outBounce'
    };
    this.opacity.set(1,transition);
    this.align.set(.15,.5,0,transition);
    this.size.setProportional(.7, 1, 1,transition);
};

Video.prototype.overlayMode = function overlayMode() {
    this.mode = 'overlay';
    var transition = {
        duration: 600,
        curve: 'outBounce'
    };
    this.opacity.set(.3,transition);
    this.align.set(.5,.5,0,transition);
    this.size.setProportional(1, 1, 1,transition);
};

module.exports = Video;