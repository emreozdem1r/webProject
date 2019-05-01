
var myIndex = 1;
carousel();

function carousel() {
  try{
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }    
  x[myIndex-1].style.display = "block";
  x[myIndex-1].style.visibility="visible";
  setTimeout(carousel, 5000);
}
catch(err){
}
}

function callback(){
  setTimeout(carousel,5000);
}
