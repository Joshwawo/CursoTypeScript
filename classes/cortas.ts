(() => {
  class Avenger {
    static aveAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
      avAge: number = 55
    ) {
      Avenger.aveAge = avAge;
    }
  }

  const antman: Avenger = new Avenger("AntMan", "Capitao", "Scoot Lung");
//   console.log(antman);
})();
