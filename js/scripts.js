function add (num1, num2){
	return num1 + num2;
}

function subtract(num1, num2){
	return num1 - num2;
}

function multiply (num1, num2){
	return num1 * num2;
}

function divide (num1, num2){
	return num1 / num2;
}

function bmi (wgt, hgt){
	return wgt / (hgt*hgt) * 703;
}

function tempConvert (fahrenheit) {
	return (fahrenheit - 32) * (5/9);
}

$(function(){
	$("button").click(function(event){
		var addinput1 = parseInt($("#add1").val());
		var addinput2 = parseInt($("#add2").val());

		$(".result h3").text(add(addinput1,addinput2));
		event.preventDefault();
	});
});
