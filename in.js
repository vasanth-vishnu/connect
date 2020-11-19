function scrolapear(){
    var introtext=document.querySelector('.card1');
    var introtext1=document.querySelector('.card');
    var intropos=introtext.getBoundingClientRect().top;
    var intropos1=introtext1.getBoundingClientRect().top;
    var screenpos=window.innerHeight/1.7;
    var screenpos1=window.innerHeight/5;
    if(intropos1<screenpos1){
        introtext1.classList.add('intro1');
    }
    if(intropos<screenpos){
        introtext.classList.add('intro');
    }
    var introtext2=document.querySelector('.card6');
    var introtext3=document.querySelector('.card4');
    var intropos2=introtext2.getBoundingClientRect().top;
    var intropos3=introtext3.getBoundingClientRect().top;
    
    var screenpos2=window.innerHeight/2;
    var screenpos3=window.innerHeight/2;
    
    if(intropos3<screenpos3){
        introtext1.classList.add('intro2');
    }
    if(intropos2<screenpos2){
        introtext.classList.add('intro3');
    }
}
window.addEventListener('scroll',scrolapear); 
 
function vas(){
    location.replace("index2.html");
}