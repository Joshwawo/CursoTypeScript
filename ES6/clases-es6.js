(()=>{


    class Avenger {
        name;
        power;
        

        constructor(name = "No name", power = 0){
            this.name = name;
            this.power = power;
            this.otra = true
        }

    }

    class flyAvenger extends Avenger {

        flying;
        constructor(name, power){
            super(name, power);
            this.flying = true;
        }

    }

    const hulk = new Avenger('Hulk', 9001)
    const falcon = new flyAvenger('Falcon', 51, Boolean)

    console.log(hulk)
    console.log(falcon)


})()