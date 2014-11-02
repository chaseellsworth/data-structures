var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree,treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var recurse = function(child){
    if(child.value === target){
      return true;
    }else if(child.children.length > 0){
      var temp;
      for(var i = 0; i < child.children.length; i++){
        if (recurse(child.children[i])) {
          return recurse(child.children[i]);
        };
      }
      return false;
    }
    return false;
  }
  return recurse(this);
};




