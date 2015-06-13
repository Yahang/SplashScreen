var famous = require('famous');
var Rotation = famous.components.Rotation;

function RotateButtComp (node) {
	this.node = node;
	this.id = node.addComponent(this);
	// node.addUIEvent('click');
	node.addUIEvent('touchstart');
	node.addUIEvent('touchmove');
	node.addUIEvent('touchend');
	node.onReceive = function onReceive(type, ev) {
		var RotComp = new Rotation(node);
	    // if (type === 'click') {
	    //     console.log('end');
	    // }
	    if (type === 'touchstart') {
	        node.setOrigin(.5, .5, .5)
	        RotComp.set(0, Math.PI/4, 0, {
	        	duration: 200,
	        	curve: 'outbounce'
	        });
	    }
	    // if (type === 'touchmove') {
	    // 	node.setOrigin(.5, .5, .5)
	    //     	.setRotation(0, 0, 0);
	    // }
	    if (type === 'touchend') {
	        node.setOrigin(.5, .5, .5)
	        RotComp.set(0, -Math.PI/4, 0, {
	        	duration: 200,
	        	curve: 'outbounce'
	        });
	    }
	    ev.stopPropagation();
	}
}

module.exports = RotateButtComp;