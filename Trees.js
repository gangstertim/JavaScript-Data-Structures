//make a tree, do a dfs

function BST() {
	//BST
	this.root = null;
	this.makeNode = function(data, parent) { 
		return {
			data : data,
			parent : parent,
			left : null,
			right : null
		};
	};
	this.addNode = function(data) {
		if (!this.root) {
			this.root = this.makeNode(data, null);
		} else {
			var curr = this.root;
			while (curr) {
				if (data <= curr.data) {
					if (!curr.left) {
						curr.left = this.makeNode(data, curr);
						break;
					} else curr = curr.left;
				} else {
					if (!curr.right) {
						curr.right = this.makeNode(data, curr);
						break;
					} else curr = curr.right;
				}
			}
		}
	};
	this.visitDFS = function(f, node) {
		//in-order
		var curr = (node || this.root);
		if (curr.left)  this.visitDFS(f, curr.left);
		f(curr);
		if (curr.right) this.visitDFS(f, curr.right);

		//pre-order
		// f(curr);
		// if (curr.left)  this.visitDFS(f, curr.left);
		// if (curr.right) this.visitDFS(f, curr.right);

		//post-order
		// if (curr.left)  this.visitDFS(f, curr.left);
		// if (curr.right) this.visitDFS(f, curr.right);
		// f(curr);
	};
	this.visitBFS = function(f, node) {
		var q = [(node || this.root)];
		while (q.length > 0) {
			node = q.shift();
			f(node);
			if (node.left) { q.push(node.left); }
			if (node.right) { q.push(node.right); }

		}
	};
	this.removeNode = function(data) {
		curr = this.root;
		while (curr) {
			if (curr.data === data) {
				if isLeaf(curr) { 
					if (this.root === curr) {
						root = null;
					} else if (curr.data <= curr.parent.data) {
						curr.parent.left = null;
					} else { curr.parent.right = null; }
				}
				else if (!curr.left) { curr = curr.right; }
				else if (!curr.right){ curr = curr.left; }
				else {
					var replacement = curr.left;
					while (replacement.right) { 
						replacement = replacement.right;
					}
					if (this.root === curr) {this.root = replacement; }
					curr.data = replacement.data;
					if (replacement.data <= replacement.parent.data) {
						replacement.parent.left = null;
					} else {replacement.parent.right = null; }
				}
				break;
			}
			curr = (data < curr) ? curr.left : curr.right;
		}
	}
}

function isLeaf(node) {
	return (!node.left && !node.right);
}

t = new BST;
t.addNode(1);
t.addNode(2);
t.addNode(3);
t.visitDFS(function(c) {console.log(c.data);});