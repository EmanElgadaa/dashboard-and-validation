    var xhrBlog = new XMLHttpRequest();
    xhrBlog.onload=function(){
	var i;
	//console.log(typeof(xhrBlog.responseText))
	var x=JSON.parse(xhrBlog.responseText);
	
	//console.log(typeof(x))
	
	//var test=document.createElement("section");
	
	//test.setAttribute('id','test');
	test.setAttribute('class','testStyle');
	var ul=document.createElement('ul');
	document.body.appendChild(test);
	
    test.appendChild(ul);
    var fo=1;
	var em=1;
	console.log(x.length)
	var myDiv=document.createElement('div')
	myDiv.setAttribute('class','myDivStyle');
	ul.appendChild(myDiv)
//    test.style.display="inline-block";
//	myDiv.setAttribute('id','ids'+fo)
//	fo++;
//	console.log("hi");
	for(i=0 ; i<x.length ; i++)
		{
			
			
		
			//-------------------------title--------------
			createTitleContent();
			
			//------------------------body------------------
			createBodyContent();
					   
		 }
		
	
	function createTitleContent()
	   {
			 var liTitle=document.createElement('li');
             myDiv.appendChild(liTitle);
			 liTitle.innerHTML=liTitle.innerHTML + x[i].title;
			 liTitle.setAttribute('class','titleClass');	
	    }
	function createBodyContent()
         {
			  var liBody=document.createElement('li');
			  myDiv.appendChild(liBody);
			  liBody.innerHTML=liBody.innerHTML + x[i].body;
			  liBody.setAttribute('class','bodyClass');
          }
}
xhrBlog.open("GET","https://jsonplaceholder.typicode.com/posts");
xhrBlog.send();


function btnClick(){
	location.href="form.html";
}