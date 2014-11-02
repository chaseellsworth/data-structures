var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);2
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket === undefined) {
    bucket = [[k, v]];
    this._storage.set(i, bucket);
  }else{
    bucket.push([k, v]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket){
    for(var j = 0; j< bucket.length; j++){
      if(bucket[j][0] === k){
        return bucket[j][1];
      }
    }
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var that = this;
  if(bucket){
    for (var j =0; j< bucket.length; j++){
      if(bucket[j][0] === k){
        bucket.splice(j,1);
      }
    }
  }
};
