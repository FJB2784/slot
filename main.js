var rnd = 0;
var i = 1;
var level = 6;
rnd = Math.floor(Math.random() * 300);


switch (level) {
    case 6:
        if (rnd < 200) {
            alert("hit");
        } else {
            alert("sorry");
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


