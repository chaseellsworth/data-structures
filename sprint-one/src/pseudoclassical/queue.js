var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length + 1] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  var numToReturn = this.storage[1];
  delete this.storage[1];
  if(this.length>0){
    this.length--;
  };
  for(var key in this.storage){
    var value = this.storage[key];
    key = parseInt(key) - 1;
    this.storage[key] = value;
  }
  return numToReturn;
};

Queue.prototype.size = function() {
  return this.length;
}

var queue = new Queue;

