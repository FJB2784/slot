

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
          document.write('<img src="img/1.jpg"/ width="250" height="250">');
          document.write('<img src="img/1.jpg"/ width="250" height="250">');
          document.write('<img src="img/1.jpg"/ width="250" height="250">');
          break;

        case 2:
          document.write('<img src="img/2.jpg"/ width="250" height="250">');
          document.write('<img src="img/2.jpg"/ width="250" height="250">');
          document.write('<img src="img/2.jpg"/ width="250" height="250">');
          break;

        case 3:
          document.write('<img src="img/3.jpg"/ width="250" height="250">');
          document.write('<img src="img/3.jpg"/ width="250" height="250">');
          document.write('<img src="img/3.jpg"/ width="250" height="250">');
          break;

        case 4:
          document.write('<img src="img/4.jpg"/ width="250" height="250">');
          document.write('<img src="img/4.jpg"/ width="250" height="250">');
          document.write('<img src="img/4.jpg"/ width="250" height="250">');
          break;

        case 5:
          document.write('<img src="img/5.jpg"/ width="250" height="250">');
          document.write('<img src="img/5.jpg"/ width="250" height="250">');
          document.write('<img src="img/5.jpg"/ width="250" height="250">');
          break;

        case 6:
          document.write('<img src="img/6.jpg"/ width="250" height="250">');
          document.write('<img src="img/6.jpg"/ width="250" height="250">');
          document.write('<img src="img/6.jpg"/ width="250" height="250">');
          break;

        case 7:
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          break;
        case 8:
          document.write('<img src="img/8.jpg"/ width="250" height="250">');
          document.write('<img src="img/8.jpg"/ width="250" height="250">');
          document.write('<img src="img/8.jpg"/ width="250" height="250">');
          break;

        case 9:
          document.write('<img src="img/9.jpg"/ width="250" height="250">');
          document.write('<img src="img/9.jpg"/ width="250" height="250">');
          document.write('<img src="img/9.jpg"/ width="250" height="250">');
          break;

        default:
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          break;
      }
    } else {
      //level6ハズレ処理
      var j = 1;
      var k = 1;
      var h = 1;
      //jkhが一緒の時、乱数を入れなおす
      while (j == k && j == h) {
        j = Math.floor(Math.random() * 8) + 1;
        k = Math.floor(Math.random() * 8) + 1;
        h = Math.floor(Math.random() * 8) + 1;
      }

      pic[1] = "img/1.jpg";
      pic[2] = "img/2.jpg";
      pic[3] = "img/3.jpg";
      pic[4] = "img/4.jpg";
      pic[5] = "img/5.jpg";
      pic[6] = "img/6.jpg";
      pic[7] = "img/7.jpg";
      pic[8] = "img/8.jpg";
      pic[9] = "img/9.jpg";
      document.write('<img src="' + pic[j] + '" width="250" height="250">');
      document.write('<img src="' + pic[k] + '" width="250" height="250">');
      document.write('<img src="' + pic[h] + '" width="250" height="250">');
    }
    break;

  //level6以外の処理
  default:
    if (rnd < 50) {
      hit = Math.floor(Math.random() * 3);
      switch (hit) {
        case 1:
          document.write('<img src="img/1.jpg"/ width="250" height="250">');
          document.write('<img src="img/1.jpg"/ width="250" height="250">');
          document.write('<img src="img/1.jpg"/ width="250" height="250">');
          break;

        case 2:
          document.write('<img src="img/2.jpg"/ width="250" height="250">');
          document.write('<img src="img/2.jpg"/ width="250" height="250">');
          document.write('<img src="img/2.jpg"/ width="250" height="250">');
          break;

        case 3:
          document.write('<img src="img/3.jpg"/ width="250" height="250">');
          document.write('<img src="img/3.jpg"/ width="250" height="250">');
          document.write('<img src="img/3.jpg"/ width="250" height="250">');
          break;

        case 4:
          document.write('<img src="img/4.jpg"/ width="250" height="250">');
          document.write('<img src="img/4.jpg"/ width="250" height="250">');
          document.write('<img src="img/4.jpg"/ width="250" height="250">');
          break;

        case 5:
          document.write('<img src="img/5.jpg"/ width="250" height="250">');
          document.write('<img src="img/5.jpg"/ width="250" height="250">');
          document.write('<img src="img/5.jpg"/ width="250" height="250">');
          break;

        case 6:
          document.write('<img src="img/6.jpg"/ width="250" height="250">');
          document.write('<img src="img/6.jpg"/ width="250" height="250">');
          document.write('<img src="img/6.jpg"/ width="250" height="250">');
          break;

        case 7:
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          break;
        case 8:
          document.write('<img src="img/8.jpg"/ width="250" height="250">');
          document.write('<img src="img/8.jpg"/ width="250" height="250">');
          document.write('<img src="img/8.jpg"/ width="250" height="250">');
          break;

        case 9:
          document.write('<img src="img/9.jpg"/ width="250" height="250">');
          document.write('<img src="img/9.jpg"/ width="250" height="250">');
          document.write('<img src="img/9.jpg"/ width="250" height="250">');
          break;

        default:
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
          document.write('<img src="img/7.jpg"/ width="250" height="250">');
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

      pic[1] = "img/1.jpg";
      pic[2] = "img/2.jpg";
      pic[3] = "img/3.jpg";
      pic[4] = "img/4.jpg";
      pic[5] = "img/5.jpg";
      pic[6] = "img/6.jpg";
      pic[7] = "img/7.jpg";
      pic[8] = "img/8.jpg";
      pic[9] = "img/9.jpg";
      document.write('<img src="' + pic[j] + '" width="250" height="250">');
      document.write('<img src="' + pic[k] + '" width="250" height="250">');
      document.write('<img src="' + pic[h] + '" width="250" height="250">');
      break;


    }
}
