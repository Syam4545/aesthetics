var img1 = document.getElementById("img-1")
var wpx = document.getElementById("W-px");
var hpx = document.getElementById("H-px");
var wpercent = document.getElementById("W-percent");
var hpercent = document.getElementById("H-percent");
var links = document. getElementById("link1");
var checkbx= document. getElementById("CKBX")
function widthpx()
{

let value = wpx.value 
img1.width=value

}

function heightpx() {
    let value =hpx.value
    img1.height=value
}

function widthpercent()
{
let value = wpercent.value
img1.style.width=value +"%"

}

function heightpercent()   {
    let value= hpercent.value
    img1.style.height=value + "%"

}

function imageclick(){
  var linkss =links.value
    if(checkbx.checked)
    {
      window.open(linkss.value, "_blank")
    }
    else{
      window.open(linkss.value, "_self")
    }
}