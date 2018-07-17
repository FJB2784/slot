var rnd = 0;
var i = 1;
var level = 6;
var hit = 0;
rnd = Math.floor(Math.random() * 300);


switch (level) {
    case 6:
        if (rnd < 200) {
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
            document.write('<img src="food.jpg"/>');
            document.write('<img src="cat.jpg" />');
            document.write('<img src="school.jpg"/>');
        }
        break;
    default:
        if (rnd < 50) {
            alert("hit");
        } else {
            alert("sorry");
        }
        break;
}


