var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 99, 100, 77, 82, 94, 88, 65];

function grades() {
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var f = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] < 61) {
            f.push(scores[i]);
            console.log(f);
        } else if (scores[i] > 60 && scores[i] < 71) {
            d.push(scores[i]);
            console.log(d);
        } else if (scores[i] > 70 && scores[i] < 81) {
            c.push(scores[i]);
            console.log(c);
        } else if (scores[i] > 80 && scores[i] < 91) {
            b.push(scores[i]);
            console.log(b);
        } else {
            a.push(scores[i]);
            console.log(a);
        }
    }
}
grades();
