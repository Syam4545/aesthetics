
    function loadDoc1(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if(this.readyState ==1){
            document.getElementById("demo1").innerHTML="first state";
        }
        else   if(this.readyState ==2){
            document.getElementById("demo1").innerHTML="second state";
        }
        else   if(this.readyState ==3){
            document.getElementById("demo1").innerHTML="third state";
        }
        else   if (this.readyState == 4 && this.status == 200){
            document.getElementById("demo1").innerHTML=this.responseText;
        }
        else{
            document.getElementById("demo1").innerHTML="eror";
        }
  
    };
    xhttp.open("GET","animation.html",true);
    xhttp.send();
}

