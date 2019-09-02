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
	if(key!=='languages')
	{
   ka (` ${key} : ${value}`);}
});

}

function ka(d)
{
	// _div=document.createElement('div')
	// _div.className = ["flex-center","position-ref","full-height"].join(" ")
	// _div.appendChild(document.createTextNode(d));
	// //document.body.appendChild(_div)

	_i_div_i_a=document.createElement('div')
	_i_div_i_a.setAttribute('class','message')
	_i_div_i_a.setAttribute('style','padding: 10px;')
	_i_div_i_a.appendChild(document.createTextNode(d));
	document.body.appendChild(_i_div_i_a)

	console.log(_i_div_i_a)
}
