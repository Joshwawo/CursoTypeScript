(() => {
    class Avenger {
      static aveAge: number = 35;
      static getAveAge(){
        return this.name
      }
  
      constructor(
        private name: string,
        private team: string,
        public realName?: string,
        avAge: number = 55
      ) {
        Avenger.aveAge = avAge;
      }

       public bio(){
        return `${this.name} (${this.team})`
      }
    }
    const antman:Avenger = new Avenger('AntMan,', 'Capitao', 'Scoott Lang')
    // console.log(Avenger.getAveAge())

  })();
  