//Quicksort.sort(array)...
function qsort(a) {
    if (a.length == 0) return [];
 
    var left = [], right = [], pivot = a[0];
 
    for (var i = 1; i < a.length; i++) {
        a[i] < pivot ? left.push(a[i]) : right.push(a[i]);
    }
 
    return qsort(left).concat(pivot, qsort(right));
}


var Quicksort = (function() {
 
  function swap(array, indexA, indexB) {
    var temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }
 
  /**
   * Partitions the (sub)array into values less than and greater
   * than the pivot value
   *
   * @param {Array} array The target array
   * @param {int} pivot The index of the pivot
   * @param {int} left The index of the leftmost element
   * @param {int} left The index of the rightmost element
   */
  function partition(array, pivot, left, right) {
    var storeIndex = left,
        pivotValue = array[pivot];
    // put the pivot on the right
    swap(array, pivot, right);
    // go through the rest
    for(var v = left; v < right; v++) {
 
      // if the value is less than the pivot's
      // value put it to the left of the pivot
      // point and move the pivot point along one
      if(array[v] < pivotValue) {
        swap(array, v, storeIndex);
        storeIndex++;
      }
    } 
    // finally put the pivot in the correct place
    swap(array, right, storeIndex);
 
    return storeIndex;
  }
 
  function sort(array, left, right) {
    var pivot = null;
    left = (left || 0);
    right = (right || array.length-1);
 
    if (left < right) {
      // pick a pivot between left and right and update it once we've partitioned
      // the array to values < than or > than the pivot value
      pivot     = left + Math.ceil((right - left) * 0.5);
      newPivot  = partition(array, pivot, left, right);
      // recursively sort to the left and right
      sort(array, left, newPivot - 1);
      sort(array, newPivot + 1, right);
    }
 
  }
  return {  sort: sort };
})();