var makeStack = function() {
  var obj = Object.create(makeStack.stackMethods);
  obj.storage = {};
  obj.length = 0;

  return obj;
};

makeStack.stackMethods = {};

makeStack.stackMethods.enqueue = function(value){
  this.storage[this.length + 1] = value;
  this.length++;
};

makeStack.stackMethods.dequeue = function(){
  var numToReturn = this.storage[1];
  delete this.storage[1];
  if(this.length>0){
    this.length--;
  }
  for(var key in this.storage){
    key = key -1;
  }
  return numToReturn;
};

makeStack.stackMethods.size = function(){
  return this.length;
};

