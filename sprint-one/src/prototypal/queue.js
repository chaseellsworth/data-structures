var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.length = 0;

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length + 1] = value;
    this.length++;
  },

  dequeue: function(){
    //save value of front of line
    var numToReturn = this.storage[1];
    //delete value at front of line
    delete this.storage[1];

    if(this.length > 0) {
      this.length--;
    };
    //loop through keys and update keys
    for (var key in this.storage) {
      key = key - 1;
    }
    //return saved value
    return numToReturn;
  },

  size: function () {
    return this.length;
  }
};

var newStack = makeQueue();
newStack.size;
newStack.enqueue("a");
console.log(newStack.length);

