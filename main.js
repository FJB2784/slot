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
      var j = 1;
      var k = 1;
      var h = 1;
      //jkhが一緒の時、乱数を入れなおす
      while (j == k && j == h) {
        j = Math.floor(Math.random() * 2) + 1;
        k = Math.floor(Math.random() * 2) + 1;
        h = Math.floor(Math.random() * 2) + 1;
      }

      pic[1] = "school.jpg";
      pic[2] = "food.jpg";
      pic[3] = "cat.jpg";
      document.write('<img src="' + pic[j] + '">');
      document.write('<img src="' + pic[k] + '">');
      document.write('<img src="' + pic[h] + '">');
    }
    break;

  //level6以外の処理
  default:
    if (rnd < 50) {
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
      var j = 1;
      var k = 1;
      var h = 1;
      //jkhが一緒の時、乱数を入れなおす
      while (j == k && j == h) {
        j = Math.floor(Math.random() * 2) + 1;
        k = Math.floor(Math.random() * 2) + 1;
        h = Math.floor(Math.random() * 2) + 1;
      }

      pic[1] = "school.jpg";
      pic[2] = "food.jpg";
      pic[3] = "cat.jpg";
      document.write('<img src="' + pic[j] + '">');
      document.write('<img src="' + pic[k] + '">');
      document.write('<img src="' + pic[h] + '">');
      break;


    }
}
