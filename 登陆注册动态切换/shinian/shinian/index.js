var eventStool = {
	getEvent: function(ev) {
		return ev || event;
	},
	getClientX: function(ev) {
		return this.getEvent(ev).clientX;
	},
	getClientY: function(ev) {
		return this.getEvent(ev).clientY;
	}
}

//动态设置可视区的宽高






