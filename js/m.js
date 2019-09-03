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
	if(key==='languages')
	{
  
}
	else if(key==='Country flag')
	{
		ka(value,1);
	}
	else
	{
		 ka (` ${key} : ${value}`,0);
	}
});

}

function ka(_d,_e)
{
	// _div=document.createElement('div')
	// _div.className = ["flex-center","position-ref","full-height"].join(" ")
	// _div.appendChild(document.createTextNode(d));
	// //document.body.appendChild(_div)

	_i_div_i_a=document.createElement('div')
	_i_div_i_a.setAttribute('class','message')
	_i_div_i_a.setAttribute('style','padding: 5px;')
	if(_e===0)
	{
	_i_div_i_a.appendChild(document.createTextNode(_d));
}
else if(_e===1)
{
	
var x = document.createElement("IMG");
    x.setAttribute("src", _d);
    x.setAttribute("width", "100");
    x.setAttribute("width", "100");
    x.setAttribute("alt", "border image");
    //document.body.appendChild(x);
    _i_div_i_a.appendChild(x)

}
else
{
	console.log('Error')
}
	document.body.appendChild(_i_div_i_a)

	console.log(_i_div_i_a)
}
