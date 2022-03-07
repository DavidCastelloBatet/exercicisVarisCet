function myFunction() {

  
  var elements = document.head.children;
  var txt = "";
  var i;
  for (i = 0; i < elements.length; i++) {
    txt = txt + elements[i].tagName + "<br>";
  }

  document.getElementById("head").innerHTML = txt.toLowerCase();


  var elements = document.body.children;
  var txt = "";
  var i;
  for (i = 0; i < elements.length; i++) {
    txt = txt + elements[i].tagName + "<br>";
  }

  document.getElementById("body").innerHTML = txt.toLowerCase();
}
