//Code modified from http://eloquentjavascript.net/1st_edition/appendix2.html
function BinaryHeap(scoreFunction){
  this.data = [];
  this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
  push: function(element) {
    this.data.push(element);
    this.bubbleUp(this.data.length - 1);
  },

  pop: function() {
    var result = this.data[0];
    var end = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = end;
      this.sinkDown(0);
    }
    return result;
  },

  remove: function(node) {
    var length = this.data.length;

    for (var i = 0; i < length; i++) {
      if (this.data[i] != node) continue;
      var end = this.data.pop();
      if (i == length - 1) break;
      this.data[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
  },

  size: function() {
    return this.data.length;
  },

  bubbleUp: function(n) {
    var element = this.data[n], score = this.scoreFunction(element);
    while (n > 0) {
      var parentN = Math.floor((n + 1) / 2) - 1,
      parent = this.data[parentN];
      if (score >= this.scoreFunction(parent))
        break;

      this.data[parentN] = element;
      this.data[n] = parent;
      n = parentN;
    }
  },

  sinkDown: function(n) {
    // Look up the target element and its score.
    var length = this.data.length,
    element = this.data[n],
    elemScore = this.scoreFunction(element);

    while(true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      // This is used to store the new position of the element,
      // if any.
      var swap = null;
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = this.data[child1N],
        child1Score = this.scoreFunction(child1);
        // If the score is less than our element's, we need to swap.
        if (child1Score < elemScore)
          swap = child1N;
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = this.data[child2N],
        child2Score = this.scoreFunction(child2);
        if (child2Score < (swap == null ? elemScore : child1Score))
          swap = child2N;
      }

      // No need to swap further, we are done.
      if (swap == null) break;

      // Otherwise, swap and continue.
      this.data[n] = this.data[swap];
      this.data[swap] = element;
      n = swap;
    }
  }
};