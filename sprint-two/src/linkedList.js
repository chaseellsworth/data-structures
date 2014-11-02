var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  list.frontNode = undefined;
  list.storage = {};

  list.addToTail = function(value){
    var node = makeNode(value);
    list.storage[value] =  node;
    list.tail = list.storage[value];

    if (list.count === 0) {
      list.head = list.tail;
      list.count++;
    }else{
      list.count++;
    }

    if (list.frontNode) {
      list.frontNode.next = node;
    }
    list.frontNode = node;

  };

  list.removeHead = function(){
    var headCache = list.head;
    var nextHeadCache = list.head.next;
    delete list.storage[list.head.value];
    list.count--;
    list.head = nextHeadCache;
    return headCache.value;

  };

  list.contains = function(target){
    //assuming target is an item in list
    if (list.storage[target]) {
      return true;
    }else{
      return false;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

