
// This function will validate Name.
function allLetter()
{ 
var uname = document.registration.username;
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
// Focus goes to next field i.e. Address.
document.registration.address.focus();
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();

return false;
}
}
// This function will validate Email.
function ValidateEmail()
{
var uemail = document.registration.email;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
document.registration.desc.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function booklist() {
    var ubooklist= document.registration.booklist;
    var allLetter =/^[A-Za-z]+$/ ;
    if (ubooklist.value.match(allLetter))
     {
       document.registration.text.focus();
       return true; 
    } 
    else {
        alert("Please enter a valid bookname!");
        ubooklist.focus();
        return false;
    }
}
function phoneno() {
    var uphoneno= document.registration.booklist;
    var Number =/^[1-10]+$/ ;
    if (uphoneno.value.match(Number))
     {
       document.registration.numbers.focus();
       return true; 
    } 
    else {
        alert("Please enter a valid phone no!");
        uphoneno.focus();
        return false;
    }
}
