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
element.visibility=false;//adding the prop of visibility to hande bar
console.log(i);
}
//dropdown is attached to each handle bar separately
//and notificatuon shade is shared by all and its single
function f()
{
  //here we are in a handle bar and we get its corrs. dropdown
  var div_element=document.getElementById("notification");//notification shade
    console.log(this);//handlebar
    this.visibility=!this.visibility;
    var dropDowmImg=this.firstChild;//dropdown
    //if any other handle bar is clicked, we should close 
    //any other dropdown being opened by its previous linked handlebar
    for(let i=0;i<pullDownHandleBars.length;i++)
    {
       if(i==0&&pullDownHandleBars[i]==this)
       {
        //write html for 1st guy
        div_element.children.item(1).innerHTML=`
        <div style="font-weight:bold; height:50px;font-size:30px">&nbsp;&nbsp;&nbsp;TUTORIALS</div>
        <table>
        <thead style="font-weight:bold; height:50px;">
        <tr>
        <th>HTML AND CSS</th>
        <th>SERVER SIDE</th>
        <th>CSS</th>
        </tr>
        </thead>
        <tr>
        <td>Learn HTML</td>
        <td>Learn JS</td>
        <td>Learn SQL</td>
        </tr>
        <tr>
        <td>Learn CSS</td>
        <td>Learn Jquery</td>
        <td>Learn MySQL</td>
        </tr>
        <tr>
        <td>Learn RWD</td>
        <td>Learn React</td>
        <td>Learn PHP</td>
        </tr>
        </table>
        
        
        `;
       }
       if(i==1&&pullDownHandleBars[i]==this)
       {
        //write html for 2nd
        div_element.children.item(1).innerText="b";

       }
       if(i==2&&pullDownHandleBars[i]==this)
       {
        //write html for 3rd guy
        div_element.children.item(1).innerText="c";

       }
       if(i==3&&pullDownHandleBars[i]==this)
       {
        //write html for 4th guy
        div_element.children.item(1).innerText="d";

       }
      var ele=pullDownHandleBars[i].firstChild;//dropdown
      if(ele!=dropDowmImg)
      ele.style.transform='rotate(0deg)';
    }
    //if the handle bar is pressed for the first time...we should
    //open the notification shade and also invert dropdown img of cross
    if(this.visibility==true)
    {
      console.log(dropDowmImg);
      dropDowmImg.style.transform='rotate(180deg)';
      div_element.style.visibility="visible";
      var crossButton=document.getElementById("cross");
      crossButton.onclick=()=>
      {
        crossButton.parentElement.style.visibility="hidden";
        dropDowmImg.style.transform='rotate(0deg)';

      }

    //open the html related content
    }
    else
    {//if the handle bar is already clicked once and we are clicking it twice
      //we should close the notifiation shad and handlebar corres. dropdown
        console.log(this);
        div_element.style.visibility="hidden";
        dropDowmImg.style.transform='rotate(0deg)';


    }

 
}




