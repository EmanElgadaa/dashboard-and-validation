function validition(){
	var email= document.getElementById("email").value;
	var password= document.getElementById("password").value;
	console.log(email);
	if((email==null || email==""))
		{
			document.getElementById("wirninge").style.display="block";
			
		}
   if(password==null || password=="")
		{
			document.getElementById("wirningp").style.display="block";
		}
	
		console.log("emooo");
		
	if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig.test(email))
		{
			console.log("hi");
			if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,12}$/ig.test(password))
				{
					location.href="dashboard.html";
				}
			else
				document.getElementById("errorMsgPs").style.display="block";
		}
	else
		{
			document.getElementById("errorMsg").style.display="block";
		}
	
}