
var v1: string = "Asd123"
var v2: boolean = true
var v3: number = 25
var v4: any = 2
var v5: unknown = true



function program(ah:number, fh:number):number[] {
    var tomb:number[] = [];
    for (var i:number = ah; i<= fh;i++) {
        tomb.push(i);
    }
    return tomb;

}

document.write(program(1, 15).toString());

function szamolo(a:number):[number,number] {
   return [a * 4, a*a]
}

var kerter:[number,number] = szamolo(5)
document.write(kerter[0].toString() + kerter[1].toString())

enum RamMeret {
    DDR1,
    DDR2,
    DDR3,
    DDR4,
    DDR5,
}

interface Szamitogep {
    gyarto: string;
    tipus: string;
    CPU: string;
    RAM: RamMeret;
    Windows: boolean;
}

let szg1: Szamitogep = {gyarto: "HP",tipus: "55",CPU: "i7",RAM:RamMeret.DDR1,Windows: true}
let szg2: Szamitogep = {gyarto: "Lenovo",tipus: "Z7",CPU: "i9",RAM:RamMeret.DDR5,Windows: false}
document.write(szg1.gyarto + szg1.tipus + szg1.CPU + szg1.RAM[szg1.RAM] + szg1.Windows)
document.write(szg2.gyarto + szg2.tipus + szg2.CPU + szg2.RAM[szg2.RAM] + szg2.Windows)
console.log(szg1,szg2)