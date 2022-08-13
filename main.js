"use strict";
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
    class Mutant {
        mutanPower(id) {
            return `${this.name} - ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: "jorge",
        age: 22,
        address: {
            id: 123,
            zip: "KAKA",
            city: "Mejixo",
        },
        getFullName(id) {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Karen",
        age: 22,
        address: {
            city: 'Hermo',
            id: 12,
            zip: 'JDCW XP'
        },
        getFullName(id) {
            return this.address.city;
        },
    };
})();
(() => {
    const client = {
        name: "jorge",
        age: 22,
        address: {
            id: 123,
            zip: "KAKA",
            city: "Mejixo",
        },
    };
    const client2 = {
        name: "Karen",
        age: 22,
        address: {
            city: 'Hermo',
            id: 12,
            zip: 'JDCW XP'
        }
    };
})();
(() => {
    let suma;
    suma = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map