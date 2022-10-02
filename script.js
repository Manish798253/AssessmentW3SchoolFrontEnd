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

function f()
{
  var div_element=document.getElementById("notification");
    console.log(this);
    this.visibility=!this.visibility;
    var dropDowmImg=this.firstChild;
    if(this.visibility==true)
    {
      console.log(dropDowmImg);
      dropDowmImg.style.transform='rotate(180deg)';
      div_element.style.visibility="visible";
    //open the html related content
    }
    else
    {
        console.log(this);
        div_element.style.visibility="hidden";
        dropDowmImg.style.transform='rotate(0deg)';


    }
 
}


