

function ButtonComp (node) {
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
	        console.log('start');
	    }
	    if (type === 'touchmove') {
	        console.log('move');
	    }
	    if (type === 'touchend') {
	        console.log('end');
	    }
	    ev.stopPropagation();
	}
}

module.exports = ButtonComp;