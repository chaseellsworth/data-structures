var Stack = function() {

  this.storage = {};
  this.length = 0;

};

Stack.prototype.push = function(value){
  this.storage[this.length + 1] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  var popValue = this.storage[this.length];
  delete this.storage[this.length];
  if (this.length>0) {
  this.length--;
  };
  return popValue;
};

Stack.prototype.size = function(){
  return this.length;
}


var newStack = Stack;
newStack.push("a");
