'use strict';

function Auto(marka, kolor) {

    this.marka = marka;
    this.kolor = kolor;
    this.wyswietlInfo = function () {
        console.log("Marka: " + this.marka + "\n" + "Kolor: " + this.kolor);

    }

}


var bmw = new Auto('bmw', 'czerwony');

bmw.wyswietlInfo();





//function Osoba(imie, nazwisko) {
//    
//    this.imie = imie;
//    this.nazwisko = nazwisko;
//    this.wzrost;
//    this.oczy;
//    this.getInfo = function() {
//            console.log("Imię: " + this.imie + "\n" 
//                        + "Nazwisko: " + this.nazwisko 
//                        + "Wzrost: " + this.wzrost + "\n"
//                        + "Oczy: " + this.oczy);
//    
//    
//    }
//    
//}
//
//
//
//var juri = new Osoba('Juri');
//
//juri.getInfo();
//
//









//
//
///*sposb1*/
//var sum = [2, 3, 4, 5, 6, 7, 8].reduce(function (a, b) {
//    return a + b;
//}, 0);
//
//
//
//console.log(sum);
//
///*sposob2*/
//var liczby = [2, 3, 4, 5, 6, 7, 8]
//var sum = 0;
//
//for (var i = 0; i < liczby.length; i++) {
//
//    sum += liczby[i];
//}
//
//console.log(sum);
//
//
///*sposob3*/
//var liczby = [2, 3, 4, 5, 6, 7, 8]
//
//function sumaElementow() {
//    var sum = 0;
//    for (var i = 0; i < liczby.length; i++) {
//
//        sum += liczby[i];
//
//    }
//    return sum;
//
//}
//
//console.log(sumaElementow());