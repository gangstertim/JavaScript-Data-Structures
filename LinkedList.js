function LinkedList() {
	this.head = null;
	this.tail = null;
	this.makeNode = function(data) { 
		return {data: data, next: null};
	};

}

LinkedList.prototype.returnAsArray = function() {
	var toReturn = [];
	var curr = this.head;
	while (curr) {
		toReturn.push(curr.data);
		curr = curr.next;
	}
	return toReturn;
}

LinkedList.prototype.apply = function(f) {
	var curr = this.head;
	while (curr) {
		f(curr.data);
		curr = curr.next;
	}
};

LinkedList.prototype.reverse = function() {
	var b = this.head;
	var curr = b.next;
	var f;
	if (this.head.next) f = curr.next;

	this.tail = this.head;
	b.next = null;
	while (f) {
		curr.next = b;
		b = curr;
		curr = f;
		f = curr.next;
	}
	curr.next = b;
	this.head = curr;
};
LinkedList.prototype.addNode = function(data) {
	if (this.tail) {
		this.tail.next = this.makeNode(data);
		this.tail = this.tail.next;	
	} else {
		this.head = this.tail = this.makeNode(data);
	}	
};
LinkedList.prototype.removeNode = function(data) {
	var curr = this.head;
	if (curr.data === data) {
		head = head.next;
	}
	else while (curr.next) {
		if (curr.next.data === data) {
			curr.next = curr.next.next;
			if (!curr.next) // curr.next does not exit
				tail = curr.next;
			break;
		} else curr = curr.next;
	}
};



// attach the .equals method to Array's prototype to call it on any array
// from StackOverflow user Tomas Zato
// ONLY COMPARES PRIMITIVES
Array.prototype.equals = function (array) {
    if (!array) return false;
    if (this.length != array.length)  return false;

    for (var i = 0, i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i])) { return false; }
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   

function linkedListTest() {
	var testArray = [];
	var t = new LinkedList;
	t.addNode(1);
	t.addNode(2);
	t.addNode(-5);
	t.addNode(10);
	//test1: did addNode work?
	testArray.push(t.returnAsArray === [1,2,-5,10]);
	//test2: can we remove numbers in array?
	t.removeNode(-5);
	testArray.push(t.returnAsArray === [1,2,10]);
	//test3: does removing data not in array behave as expected?
	t.removeNode(100);
	testArray.push(t.returnAsArray === [1,2,10]);
	//test4: does reverse work?
	t.reverse();
	testArray.push(t.returnAsArray === [10,2,1]);
	console.log(testArray);
};