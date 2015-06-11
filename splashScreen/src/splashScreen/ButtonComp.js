

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
	        node.setScale(1.5, 1.5, 1);
	    }
	    if (type === 'touchmove') {
	    	// console.log(ev);
	        node.setScale(1.5, 1.5, 1);
	    }
	    if (type === 'touchend') {
	        node.setScale(1, 1, 1);
	    }
	    ev.stopPropagation();
	}
}

module.exports = ButtonComp;