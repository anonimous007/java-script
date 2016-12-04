'use strict';

var Osoba = {
    imie: "Marcin",
    wzrost: 180,
    wyswietlDetale: function() {
        console.log( this.imie + " " + this.wzrost )
    }

}


Osoba.imie = "Kasia";
Osoba.wzrost = 170;

Osoba.oczy = "niebieskie";
console.log( Osoba.oczy );

delete Osoba.oczy;

console.log ( Osoba.oczy );

Osoba.wyswietlDetale(); 

delete  Osoba.imie;

console.log ( Osoba.imie);


var moje_dane = {
    imie: "Juri",
    wzrost: 180,
    wyswietlDetale: function() {
        console.log( this.imie + " " + this.wzrost )
    }
}

moje_dane.imie= "Roman";
moje_dane.wzrost = 190;

moje_dane.wyswietlDetale();






