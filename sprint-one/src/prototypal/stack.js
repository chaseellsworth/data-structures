var makeStack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.length = 0;

  return obj;
};

var stackMethods = {
      push: function(value){
        this.storage[this.length + 1] = value;
        this.length++;
      },

      pop: function(){
        var popValue = this.storage[this.length];
        delete this.storage[this.length];
        if (this.length>0) {
        this.length--;
        };
        return popValue;
      },

      size: function(){
        return this.length;
      }
}

var newStack = makeStack();
newStack.push("a");
newStack.push("b");
console.log(newStack.length);
