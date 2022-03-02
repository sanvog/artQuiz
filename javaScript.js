document.getElementById("artForm").onsubmit=function() {
	q1 = parseInt(document.querySelector('input[name = "question1"]:checked').value);
	q2 = parseInt(document.querySelector('input[name = "question2"]:checked').value);
	q3 = parseInt(document.querySelector('input[name = "question3"]:checked').value);
	q4 = parseInt(document.querySelector('input[name = "question4"]:checked').value);
	
	
	//To remove the blue dot after submit
	var removeBlueDot=document.querySelector("#question1Alt1");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question1Alt2");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question1Alt3");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question2Alt1");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question2Alt2");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question2Alt3");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question3Alt1");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question3Alt2");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question3Alt3");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question4Alt1");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question4Alt2");
	removeBlueDot.checked = false;
	var removeBlueDot=document.querySelector("#question4Alt3");
	removeBlueDot.checked = false;
	
	result = q1 + q2 + q3 + q4;
	
 document.getElementById("grade").innerHTML = result;
	
 if (result == 0) {result2 = "0 of 100 points -I don't think you studied Art history before?"};
 if (result == 25) {result2 = "25 of 100 points -You need to read some more."};
 if (result == 50) {result2 = "50 of 100 points -You should dig in to the Renaissance."};
 if (result == 75) {result2 = "75 of 100 points -So close. Try again."};
 if (result == 100) {result2 = "100 of 100 point -Wow excellent!"};
 document.getElementById("grade2").innerHTML = result2; 

return false; // required to not refresh the page; just leave this here
} //this ends the submit function

