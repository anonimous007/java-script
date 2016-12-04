'use strict';

var liczba1 = 50;
var kolory = ['żółty', 'pomarańczowy', 'łososiowy'];

kolory[3] = "czarny"

kolory.push("czerwony");

kolory.pop();

var dlugoscTablicy;
dlugoscTablicy = kolory.unshift("zielony");

kolory.shift();

console.log(kolory.lenght);
console.log(kolory);

for (var i = 0; i < kolory.lenght; ++i) {
    console.log(kolory[i]);
}

console.log(kolory[3] = "czarny");


var p1 = kolory.join(" ");
console.log(p1);


var odtylu = kolory.reverse;

console.log(odtylu);



var kolory2 = ["niebieski", "biały", "fioletowy"]






