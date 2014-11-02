var Graph = function(){

  this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  //create empty object that is the new node
  var nodeName = newNode;
  var toNodeName = toNode;
  newNode = {};

  this.storage[nodeName] = newNode;
  //if it's any object after the first object,
  if(Object.keys(this.storage).length > 0){
    //say which node you're connecting
    this.storage['"' + nodeName + '"']['"' + toNodeName + '"'] = 4;
  }
  //put it in the storage object
  this.storage[nodeName] = 4;
};

Graph.prototype.contains = function(node){
  if(this.storage.hasOwnProperty(node)){
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

var newGraph = new Graph
newGraph.addNode('chase');
newGraph.addNode('jon');
// newGraph.contains('chase');
// newGraph.removeNode('chase');
// newGraph.contains('chase');
