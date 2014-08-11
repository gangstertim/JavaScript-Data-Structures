function Stack() {
	//LIFO
	this.data = [];
}

Stack.prototype = {
	push: function(data) {
		this.data.push(data);
	},
	pop: function() {
		return this.data.pop();
	},
	peek: function() {
		return this.data[this.data.length - 1];
	}
}



function Queue() {
	//FIFO
	this.data = [];
}

Queue.prototype = {
	enqueue: function(data) {
		this.data.push(data);
	},
	dequeue: function() {
		return this.data.shift();
	},
	peek: function() {
		return this.data[0];
	};
}