var makeStack =  function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[length + 1] = value;
    length++;
  };

  someInstance.pop = function(){
    var popValue = storage[length];
    delete storage[1]
    if (length>0) {
      length--;
    };
    return popValue;
    };

  someInstance.size = function(){  
    return length;
  };
  

  return someInstance;
};
