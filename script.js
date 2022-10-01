var pullDownHandleBars=document.getElementsByClassName("black");
//console.log(pullDownHandleBars.item(0));
//var element=pullDownHandleBars[0];
var l=pullDownHandleBars.length;
var element=undefined;
for(let i=0;i<l;i++)
{
element=pullDownHandleBars[i];
console.log(element);
element.addEventListener("click",f);
console.log(i);
}
function f()
{
    console.log(this);
    //open the html related content
}
console.log("yes")

