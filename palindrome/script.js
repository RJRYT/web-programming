//Palindrome Checker
function palindrome_check(){
var ishtra =document.getElementById("input").value;
var reg = /[W_]/g;
var smallstring = ishtra.toLowerCase().replace(reg, "");
var reversed = smallstring.split("").reverse().join("");
if (ishtra.length < 5 || isNaN(ishtra)){
alert("Please enter 5 digit Number");
} else {
if (reversed === smallstring){
    document.getElementById("results").style.color = "blue";
document.getElementById("results").innerHTML =
" It is a palindrome. ";
}
else{
document.getElementById("results").style.color = "red";
document.getElementById("results").innerHTML =
" It is not a palindrome. ";
}
}
}