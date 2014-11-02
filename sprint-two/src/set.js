var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};
var count = 0;

setPrototype.add = function(item){
  if (set._storage === undefined) {
    set._storage = {};
  }
  if (!set._storage[item]) {
    set._storage[item] = item;
    count++;
  }
};

setPrototype.contains = function(item){
  for (var key in set._storage) {
    if (set._storage[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  if (set._storage[item]) {
    delete set._storage[item];
  };
};

var set = makeSet();
set.add("Susan Sarandon");
set.add("Danny Glover");
set.contains('Danny Glover')
set.contains('Susan Sarandon')
