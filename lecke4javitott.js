const korhaz = require('../lecke2/database');

const pacienslista = [...korhaz.doktorok[0].paciensek, ...korhaz.doktorok[1].paciensek];

console.log(pacienslista);

let gyogyszerlista = [];

for (let i = 0; i < pacienslista.length; i++) {
    console.log(i + 1, "paciens:", pacienslista[i].nev);
    console.log(Number.parseFloat(pacienslista[i].magassag), "cm");
    console.log(pacienslista[i].suly, pacienslista[i].insurance);

    let gyogyszerek = [];

    if (Number.parseFloat(pacienslista[i].magassag) > 175) {
        gyogyszerek.push('brufen');
    } else {
        gyogyszerek.push('null');
    }
    console.log("1. gyogyszer:", gyogyszerek[0]);

    if (Number.parseFloat(pacienslista[i].suly) < 70 && Number.parseFloat(pacienslista[i].kor) < 30) {
        gyogyszerek.push("bensedin");
    } else {
        gyogyszerek.push('null');
    }
    console.log("2. gyogyszer:", gyogyszerek[1]);

    if (pacienslista[i].insurance === true && Number.parseFloat(pacienslista[i].suly) > 100) {
        gyogyszerek.push("glucophage");
    } else {
        gyogyszerek.push('null');
    }
    console.log("3. gyogyszer:", gyogyszerek[2]);

    if (Number.parseFloat(pacienslista[i].kor) > 60 && pacienslista[i].insurance === true) {
        gyogyszerek.push("diclophen");
    } else {
        gyogyszerek.push('null');
    }
    console.log("4. gyogyszer:", gyogyszerek[3]);

    gyogyszerlista.push(gyogyszerek);
}
