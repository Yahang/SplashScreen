

function RotateButtComp (node) {
	this.node = node;
	this.id = node.addComponent(this);
	// node.addUIEvent('click');
	node.addUIEvent('touchstart');
	node.addUIEvent('touchmove');
	node.addUIEvent('touchend');
	node.onReceive = function onReceive(type, ev) {
	    // if (type === 'click') {
	    //     console.log('end');
	    // }
	    if (type === 'touchstart') {
	    	console.log(1);
	        node.setOrigin(.5, .5, .5)
	        	.setRotation(0, Math.PI/3, 0)
	    }
	    if (type === 'touchmove') {
	    	node.setOrigin(.5, .5, .5)
	        	.setRotation(0, Math.PI/3, 0)
	    }
	    if (type === 'touchend') {
	        node.setScale(1, 1, 1);
	    }
	    ev.stopPropagation();
	}
}

module.exports = RotateButtComp;