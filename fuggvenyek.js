export function udvozles(nev) {
    console.log("hello " + nev + " programozni jó!")
}

/* var let const - változók */

export function elagazas2(){
    if (szam === 0) {
        console.log(szam + " Nulla")
    } else if (szam % 2 === 0) {
        console.log(szam + " Páros")
    } else {
        console.log(szam + " Páratlan")
    }
}

/* A szám változóról döntsük el, hogy páros-e? */

/* "===" a típus is és az érték is ellenőrizve lesz */

/* 10x az üzenetet */

export function forCiklus(){
for (let index = 0; index < 10; index++) {
        console.log(`A(z) ${index}. üzenet`)
    }
}

export function whileCiklus(){
    let index = 0;
    while (index < 10) {
        console.log("Ez az első üzenet");
        index++;
    }
}