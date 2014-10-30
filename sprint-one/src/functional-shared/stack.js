var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    length: 0,
  }
  instance = _.extend(instance, stackMethods)


  return instance;
};

var stackMethods = {
  push : function(value){
    this.storage[this.length + 1] = value;
    this.length++;
  },
  pop : function(){
    var popValue = this.storage[this.length];
    delete this.storage[this.length];
    if (this.length>0) {
      this.length--;
    };
    return popValue;
  },
  size : function(){
    return this.length;
  }
}




