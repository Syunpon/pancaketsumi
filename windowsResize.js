var height_b = document.body.clientHeight;
var width_b = document.body.clientWidth;

function ChangeCanvasSize() {
  var elem = document.getElementById('#canvas');
  var height = document.body.clientHeight;
  var width = document.body.clientWidth;
  
  if (height != height_b || width != width_b) {
    elem.setAttribute("height", height.toString());
    elem.setAttribute("width", width.toString());
  }
  
  height_b = hieght;
  width_b = width;
  setTimeout(ChangeCanvasSize, 100);
}

ChangeCanvasSize();
