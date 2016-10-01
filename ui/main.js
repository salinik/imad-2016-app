console.log('Loaded!');
var img=document.getElementById("madi");
var marginRight=0;
function moveLeft()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+`px`;
}
img.onclick = function(){
    img.style.marginLeft=`100px`;
    var interval=setInterval(moveLeft,100);
};