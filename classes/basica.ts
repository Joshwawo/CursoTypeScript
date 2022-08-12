(() => {
  class Avenger {
    private name: string;
    private team: string;
    public realName?: string;
    static aveAge:number=35

    constructor(name:string,team:string,realName?:string, aveAge?:number){
            this.name = name;
            this.team = team;
            this.realName = realName;
    }

  }

  const antman:Avenger = new Avenger('AntMan', 'Capitao');
console.log(antman)
})();
