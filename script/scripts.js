
const display= document.querySelector("#display");
const buttons= document.querySelectorAll("button");
var bc = 10400;





buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){ 
         document.getElementById("total").innerHTML  = display.value = Math.round(eval(display.value * bc))
         document.getElementById("style").style.display = 'block';
    } else if (btn.id === "ac"){
            document.getElementById("total").innerHTML =  display.value = ""
            document.getElementById("style").style.display = 'none';
        } else if (btn.id == "de"){
            display.value = display.value.slice(0, -1);
        } else { 
            display.value += btn.id
        } 
    })   
})



    

function startTime(){
    today=new Date();
    h=today.getHours();
    m=today.getMinutes();
    m=checkTime(m);
    document.getElementById('reloj').innerHTML=h+":"+m;
    t=setTimeout('startTime()',500);}
    function checkTime(i)
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){startTime();}


 function change(){
    fristext = document.getElementsByClassName("textPrimery");
    secondtext = document.getElementsByClassName("textSecondary");

    secondtext.get

 }