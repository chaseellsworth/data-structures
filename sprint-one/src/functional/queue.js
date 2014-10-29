var makeQueue = function(){
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length + 1] = value;
    length++;
  };

  someInstance.dequeue = function(){
    var numToReturn = storage[1];
    delete storage[1];
    if (length>0) {
      length--;
    };
    for(var key in storage){
      key = key -1;
    }
    return numToReturn;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
