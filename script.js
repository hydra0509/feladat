var v1 = "Asd123";
var v2 = true;
var v3 = 25;
var v4 = 2;
var v5 = true;
function program(ah, fh) {
    var tomb = [];
    for (var i = ah; i <= fh; i++) {
        tomb.push(i);
    }
    return tomb;
}
document.write(program(1, 15).toString());
function szamolo(a) {
    return [a * 4, a * a];
}
var kerter = szamolo(5);
document.write(kerter[0].toString() + kerter[1].toString());
var RamMeret;
(function (RamMeret) {
    RamMeret[RamMeret["DDR1"] = 0] = "DDR1";
    RamMeret[RamMeret["DDR2"] = 1] = "DDR2";
    RamMeret[RamMeret["DDR3"] = 2] = "DDR3";
    RamMeret[RamMeret["DDR4"] = 3] = "DDR4";
    RamMeret[RamMeret["DDR5"] = 4] = "DDR5";
})(RamMeret || (RamMeret = {}));
var szg1 = { gyarto: "HP", tipus: "55", CPU: "i7", RAM: RamMeret.DDR1, Windows: true };
var szg2 = { gyarto: "Lenovo", tipus: "Z7", CPU: "i9", RAM: RamMeret.DDR5, Windows: false };
document.write(szg1.gyarto + szg1.tipus + szg1.CPU + szg1.RAM[szg1.RAM] + szg1.Windows);
document.write(szg2.gyarto + szg2.tipus + szg2.CPU + szg2.RAM[szg2.RAM] + szg2.Windows);
console.log(szg1, szg2);
