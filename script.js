
var item = document.getElementById("main");

  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) 
      item.scrollLeft += 300;
    else 
      item.scrollLeft -= 300;
  });