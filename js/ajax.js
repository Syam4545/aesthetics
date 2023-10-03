 loadDoc = () =>{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "resumenew.html", true);
    xhttp.send();
  }

  loadDoc1 = () =>{
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        (this.readyState == 4 && this.status == 200)?document.getElementById("demo1").innerHTML=this.responseText : '';
    };
    xhttp.open("GET","formjs.html");
    xhttp.send();
}

