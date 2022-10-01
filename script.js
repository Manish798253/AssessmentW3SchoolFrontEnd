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
element.visibility=false;
console.log(i);
}
var div_element=undefined;
function f()
{
    console.log(this);
    this.visibility=!this.visibility;
    if(this.visibility==true)
    {
    //open the html related content
   div_element=document.createElement("div");
    div_element.style.width="500px";
    div_element.style.height="200px";
    div_element.style.backgroundColor="black";
   this.appendChild(div_element);
    }
    else
    {
        console.log(this);
      this.firstChild.innerHTML="";
    }
 
}
console.log("yes")

