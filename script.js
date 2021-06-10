function compute()
{
var today=new Date();
   var principal = document.getElementById("principal").value;
   var rate=document.getElementById("rate").value;
   var years=document.getElementById("years").value;
   var intt=(principal*rate*years)/100;
   var yy=today.getFullYear();
   p1.innerHTML= principal;
   r1.innerHTML= rate;
   t1.innerHTML= Number(yy)+Number(years);
   a1.innerHTML= intt;
}


        
