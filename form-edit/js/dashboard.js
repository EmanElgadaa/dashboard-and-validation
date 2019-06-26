
var xhrBlog = new XMLHttpRequest();
xhrBlog.onload=function(){
	var i;
	console.log(typeof(xhrBlog.responseText))
	var x=JSON.parse(xhrBlog.responseText);
	
	console.log(typeof(x))
	var test=document.createElement("section");
	test.setAttribute('id','test');
	test.setAttribute('class','testStyle');
	var ul=document.createElement('ul');
	document.body.appendChild(test);
	
    test.appendChild(ul);
var fo=1;
	var em=1;
	console.log(x.length)
	for(i=0 ; i<x.length ; i++)
		{
			var myDiv=document.createElement('div')
			myDiv.setAttribute('class','myDivStyle');
			ul.appendChild(myDiv)
			test.style.display="inline-block";
			myDiv.setAttribute('id','ids'+fo)
			fo++;
			console.log("hi");
			//-------------------------title--------------
			var liTitle=document.createElement('li');
           myDiv.appendChild(liTitle);
			liTitle.innerHTML=liTitle.innerHTML + x[i].title;
			 liTitle.setAttribute('class','titleClass');
			
			//------------------------body------------------
			var liBody=document.createElement('li');
            myDiv.appendChild(liBody);
			liBody.innerHTML=liBody.innerHTML + x[i].body;
			liBody.setAttribute('class','bodyClass');
		//	var bodyD=li.innerHTML ; 
			//--------------------------button-edit---------
			var li=document.createElement('li');
            myDiv.appendChild(li);	
			var buttonEdit=document.createElement('button');
			li.appendChild(buttonEdit);
			buttonEdit.innerHTML="edit";
			buttonEdit.setAttribute('class','editStyle')
			buttonEdit.setAttribute('id','btn'+em)
			em++;
				
             buttonEdit.onclick=function(){
		 	var titleD = ((this.parentElement).parentElement).firstChild.innerHTML;
			var bodyD = ((this.parentElement).parentElement).childNodes[1].innerHTML;
				 console.log(titleD)
				 console.log(bodyD);
					//edit();
				 if(typeof(Storage)!=="undefined")
		  			{
						localStorage.setItem("myData",titleD);
						localStorage.setItem("myBody",bodyD);
						location.href="edit.html";
					}
				} 
		console.log(localStorage.getItem("myData"))
	
			//--------------------button-delet------------
			var li=document.createElement('li');
            myDiv.appendChild(li);	
			var buttonDelet=document.createElement('button');
			li.appendChild(buttonDelet);
			buttonDelet.innerHTML="delet";
			buttonDelet.setAttribute('class','deletStyle');
			buttonDelet.addEventListener("click",function(){
            alert("are you sure");
				if(true)
					{
						(this.parentElement).parentElement.style.display = 'none';
				         console.log((this.parentElement).parentElement);
					}
				
			})
					   
		}		
//				var buttonEdit= document.getElementById('btn'+em);
//				
//				buttonEdit.onclick=function(){
//					edit();
//					
//				}
//	
	
}
xhrBlog.open("GET","https://jsonplaceholder.typicode.com/posts");
xhrBlog.send();


//function edit()
//{
//	  window.location.href="file:///F:/my-templete/form-edit/edit.html";
//	  
//
//}

//var arr = [1,2,3,4] ; 
//
//arr.map(function(ele,index){
//	
//	console.log(arr[1]) ;
//})

