function Stack() {
	//LIFO
	this.data = [];
	this.push = function(data) {
		this.data.push(data);
	};
	this.pop = function() {
		return this.data.pop();
	};
	this.peek = function() {
		return this.data[this.data.length - 1];
	}
}

function Queue() {
	//FIFO
	this.data = [];
	this.enqueue = function(data) {
		this.data.push(data);
	};
	this.dequeue = function() {
		return this.data.shift();
	};
	this.peek = function() {
		return this.data[0];
	};

}

function Heap() {

	
}