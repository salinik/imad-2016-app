console.log('Loaded!');
var img=document.getElementById("madi");
var marginLeft=0;
function moveRight()
{
    marginRightt=marginRight+10;
    img.style.marginRight=marginRight+`px`;
}
img.onclick = function(){
    
    var interval=setInterval(moveRight,100);
};