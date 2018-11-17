var game_height_b;
var game_width_b;

function ChangeCanvasSize() {
  var game_height = window.innerHeight;
  var game_width = window.innerWidth;

  if (game_height != game_height_b || game_width != game_width_b) {
    if (document.getElementById('#canvas') != null) {
      document.getElementById('#canvas').height = game_height;
      document.getElementById('#canvas').width = game_width;

      game_height_b = game_height;
      game_width_b = game_width;
    }
  }

  setTimeout(ChangeCanvasSize, 16);
}

ChangeCanvasSize();
