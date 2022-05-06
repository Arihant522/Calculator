var display=document.getElementById("display");
let result="";
let prevresult="";
// start of function to add numbers and operators to display
function val(char)
{
    result=result+char;
    display.value=result;
}
// start of function to add numbers and operators to display

// start of function to display ans when "=" is pressed
function displayans()
{
    display.value=eval(result);
    result=eval(result)+"";
    prevresult=result;
}
// end of function to display ans when "=" is pressed

// start of function to delete the last character
function backvalue()
{
    result=result.substring(0,result.length-1);
    display.value=result;
}
// end of function to delete the last character

// start of function to use previous answer 
function anssave()
{
   result=result+" "+prevresult;
   display.value=result;
}
// end of function to use previous answer 

// start of function to reset the entire display
function resetvalue()
{
    result="";
    prevresult="";
    display.value="0";
}
// end of function to reset the entire display

// start of function to reverse the sign of result
function signopposite()
{
    result="-1*("+result+")";
  display.value=result;
}
// end of function to reverse the sign of result