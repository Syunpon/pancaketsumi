var game_height_b = document.body.clientHeight;
var game_width_b = document.body.clientWidth;

function ChangeCanvasSize() {
  var elem = document.getElementById('#canvas');
  var game_height = window.innerHeight;
  var game_width = window.innerWidth;

  if (game_height != game_height_b || game_width != game_width_b) {
    elem.setAttribute("height", game_height.toString());
    elem.setAttribute("width", game_width.toString());
  }

  game_height_b = game_height;
  game_width_b = game_width;
  setTimeout(ChangeCanvasSize, 100);
}

ChangeCanvasSize();
