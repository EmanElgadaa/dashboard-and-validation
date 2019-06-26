
//window.location.href="file:///F:/my-templete/form-edit/dashboard.html";
document.getElementById("edtitle").value=localStorage.getItem("myData");
document.getElementById("edbody").value=localStorage.getItem("myBody");
function blog()
{
	location.href="index.html";
}
function dash()
{
	location.href="dashboard.html";
}