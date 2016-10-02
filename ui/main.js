console.log('Loaded!');
//couter code
var counter=0;
var button=document.getElementById("counter");
button.onClick=function(){
    counter=countr+1;
    var span=document.getElementById("count");
span.innerHTML=counter.toString();
    
};