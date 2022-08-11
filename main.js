"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const fullName = (firstName, LastName, upper = false) => {
        if (upper) {
            return `${firstName} ${LastName || 'no last Name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${LastName || 'no last Name'}`;
        }
    };
    let noName;
    const name = fullName('maloso', 'stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, LastName) => {
        return `${firstName} ${LastName || 'no last Name'}`;
    };
    let noName;
    const name = fullName('maloso');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, LastName) => {
        return `${firstName} ${LastName}`;
    };
    let noName;
    const name = fullName(noName, 'maloso');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restoNombre) => {
        return `${firstName} ${restoNombre.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'Pancho');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWord = () => `El mundo esta salvado`;
    let myFunc;
    console.log(myFunc);
    myFunc = saveTheWord;
    console.log(saveTheWord());
})();
(() => {
    const hero = "Flash";
    function returName() {
        return hero;
    }
    const ActiveBatiSeñal = () => {
        return "Bati Señal Activada!";
    };
    console.log(typeof ActiveBatiSeñal);
    const heroName = returName();
})();
(() => {
    let flash = {
        name: 'Barry Alen ',
        age: 24,
        powers: ['Rapidin', 'viajar en el tiempo']
    };
})();
(() => {
    let flash = {
        name: 'Barry Alen ',
        age: 24,
        powers: ['Rapidin', 'viajar en el tiempo']
    };
    let batman = {
        name: 'Blark ',
        age: 70,
        powers: ['Rapidin']
    };
})();
(() => {
    let flash = {
        name: 'Barry Alen ',
        age: 24,
        powers: [1, 2]
    };
    let batman = {
        name: 'Blark ',
        age: 70,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariable = "Jorge";
    +console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    console.log(charles);
    console.log(apocalipsis);
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let avenger;
    let exist;
    let power;
    avenger = "Doc Strange";
    console.log(avenger.charAt(0));
    avenger = 150.123123;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(() => {
    const number = [1, 2, 3, 4, 5, 7, 8, 9, 10,];
    const villans = ['Omega rojo', 'Juan', 'Duende Verde'];
    villans.forEach(villano => console.log(villano.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log({ isSuperman });
    console.log({ isBatman });
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudiLevel;
    (function (AudiLevel) {
        AudiLevel[AudiLevel["min"] = 1] = "min";
        AudiLevel[AudiLevel["medium"] = 2] = "medium";
        AudiLevel[AudiLevel["max"] = 10] = "max";
    })(AudiLevel || (AudiLevel = {}));
    let currentAudio = AudiLevel.medium;
    console.log(currentAudio);
    console.log(AudiLevel);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Auxilio');
    console.log('hola mundo');
})();
(() => {
    let isActive = null;
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villans = 20;
    if (avengers < villans) {
        console.log('Estamos en peligro');
    }
    else {
        console.log('tamos salvados');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "batman";
    const linternaVerde = "Linterna's Verde";
    const volcanNegro = `Linterna's Verde`;
    console.log(`I'm ${batman}`);
    console.log(batman.toLocaleUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || 'No esta presente');
})();
(() => {
    const heroe = ['Dr Strange', 100, true];
    heroe[1] = 50;
    heroe[0] = 'hollas';
    heroe[2] = false;
    console.log(heroe);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
(() => {
    const a = 10;
    console.log(a);
})();
//# sourceMappingURL=main.js.map