function compute()
{
   var principal = document.getElementById("principal").value;
   var rate=document.getElementById("rate").value;
   var years=document.getElementById("years").value;
   if(principal<1){
   window.alert("Enter a positive number");
   getfocus();}
   else
   {
       var interest=(principal*rate*years)/100;
       var year=new Date().getFullYear()+parseInt(years);
       document.getElementById("s1").innerHTML="If you deposit ";
       p1.innerHTML= principal;
       document.getElementById("s2").innerHTML="at an interest rate of ";
       r1.innerHTML= rate;
       document.getElementById("s3").innerHTML="You will receive an amount of ";
       a1.innerHTML= interest;
       document.getElementById("s4").innerHTML="in the year ";
       t1.innerHTML= year;
   }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function getfocus(){
    document.getElementById("principal").focus();
}
        
