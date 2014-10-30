var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    length: 0
  }
  instance = _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.length + 1] = value;
    this.length++;
  },
  dequeue: function(){

    var numToReturn = this.storage[1];
    delete this.storage[1];
    if(this.length>0){
      this.length--;
    };
    for(var key in this.storage){
      key = key -1;
    }
    return numToReturn;
  },

  size: function(){
    return this.length;
  }

};



