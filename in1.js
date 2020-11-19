const text=document.getElementById("text");
var timedis=document.getElementById("timex");
var para=[
    "Hello this is so facinating about your face and many other parts so please like it",
    "The two examples above do exactly the same. There is no need to use new Array() For simplicity, readability and execution speed, use the first one (the array literal method).",
    "Hii this is vasanth",
    "Mam there is many opertunities and people with great knowledge"
];
var given;
function vs(){
    var lp=para.length;
var b=Math.floor(Math.random() * lp);
document.querySelector(".given p").innerHTML=para[b];
given=document.querySelector(".given p").innerHTML;
}
function vas(){
    location.reload();
}
var lp=para.length;
var b=Math.floor(Math.random() * lp);
document.querySelector(".given p").innerHTML=para[b];
var given=document.querySelector(".given p").innerHTML;
var t=0;
var t1=0;
var t2=0;
var g1;
var c1=0;
function timer(){
    timedis.innerHTML=t2+":"+t1+":"+t;
    t++;
    if(t==60){
        t=0;
        t1++;
    }
    if(t1==60){
        t1=0;
        t2++;
    }
}
function comp(){
    let txt=text.value;
        if(txt[c1]==given[c1]){
            c1++;
            text.style.borderColor="green";
        }
        else{
            text.style.borderColor="red";
        }
        if(c1==given.length || txt===given){
            clearInterval(g1);
        }
       
}
function start(){
    let l1=text.value.length;
    if(l1===0){
       g1=setInterval(timer,16.66);
    }
   
}
text.addEventListener("keypress",start,false);
text.addEventListener("keyup",comp,false);

