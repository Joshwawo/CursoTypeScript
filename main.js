"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName, aveAge) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.aveAge = 35;
    const antman = new Avenger('AntMan', 'Capitao');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map