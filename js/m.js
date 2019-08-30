function __m__(_d)
{
	Object.prototype.forEach = function(cb){
   if(this instanceof Array) return this.forEach(cb);
   let self = this;
   Object.getOwnPropertyNames(this).forEach(
      (k)=>{ cb.call(self, self[k], k); }
   );
};

Object(this.__m).forEach((value, key)=>{ 
    document.write(` ${key} : ${value}  <br>`);
});

}