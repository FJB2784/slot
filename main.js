var rnd = 0;
var i = 0;
var level = 6;
var hit = 0;
var out = new Array();
var pic = new Array();
rnd = Math.floor(Math.random() * 300);

switch (level) {
  case 6:
    if (rnd < 200) {
      //あたりのときの表示
      hit = Math.floor(Math.random() * 3);
      switch (hit) {
        case 1:
          document.write('<img src="food.jpg"/>');
          document.write('<img src="food.jpg"/>');
          document.write('<img src="food.jpg"/>');
          break;
        case 2:
          document.write('<img src="cat.jpg" />');
          document.write('<img src="cat.jpg" />');
          document.write('<img src="cat.jpg" />');
          break;
        case 3:
          document.write('<img src="school.jpg"/>');
          document.write('<img src="school.jpg"/>');
          document.write('<img src="school.jpg"/>');
          break;
        default:
          document.write('<img src="school.jpg"/>');
          document.write('<img src="school.jpg"/>');
          document.write('<img src="school.jpg"/>');
          break;
      }
    } else {
      //level6ハズレ処理
      out[0] = 1;
      out[1] = 1;
      out[2] = 1;
      until(out[0] == out[1] && out[0] == out[2]);
      {
        out[0] = Math.floor(Math.random() * 3);
        out[1] = Math.floor(Math.random() * 3);
        out[2] = Math.floor(Math.random() * 3);
      }
      j = out[0];
      k = out[1];
      h = out[2];

      pic[1] = "school.jpg";
      pic[2] = "food.jpg";
      pic[3] = "cat.jpg";
      document.write('<img src="' + pic[j] + '">');
      document.write('<img src="' + pic[k] + '">');
      document.write('<img src="' + pic[h] + '">');
      break;
    }

  //level6以外の処理
  /* default:
    if (rnd < 50) {
      alert("hit");
    } else {
      alert("sorry");
    }
    break; */
}
