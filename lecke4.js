const korhaz = require('../lecke2/database');

const pacienslista = [...korhaz.doktorok[0].paciensek,...korhaz.doktorok[1].paciensek];

console.log(pacienslista);

 gyogyszerlista = [[]];
 gyogyszerek = [];


for (let i = 0; i < pacienslista.length; i++) {

console.log(i+1,"paciens:",pacienslista[i].nev);
console.log(Number.parseFloat(pacienslista[i].magassag),"cm");
console.log(pacienslista[i].suly,pacienslista[i].insurance);
let a=0;


    if (Number.parseFloat(pacienslista[i].magassag) > 175) {
         gyogyszerek[a] = 'brufen'; 
          
    }
    else
    gyogyszerek[a] ='null';

    console.log(a+1,". gyogyszer:",gyogyszerek[a]);
    a++;

    if (Number.parseFloat(pacienslista[i].suly) < 70 && Number.parseFloat(pacienslista[i].kor) < 30 ) {
        gyogyszerek[a] = "bensedin";
    } else
    gyogyszerek[a] ='null';
    console.log(a+1,". gyogyszer:",gyogyszerek[a]);
    a++;
    if (pacienslista[i].insurance = true && Number.parseFloat(pacienslista[i].suly) > 100) {
        gyogyszerek[a] = "glucophage";
     } else {gyogyszerek[a] = 'null'};
        console.log(a+1,". gyogyszer:",gyogyszerek[a]);
        a++;
     
     if (Number.parseFloat(pacienslista[i].kor)> 60 &&

      (pacienslista[i].insurance = true)) {
        gyogyszerek[a] = "diclophen";
     } 
     else {gyogyszerek[a] = 'null'; }
        console.log(a+1,". gyogyszer:",gyogyszerek[a]);
        a++;
     
     
};
