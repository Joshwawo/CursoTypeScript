(() => {
  type Avenger = {
    nick: string;
    ironMan: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avenger = {
    nick: "Samuel L. Jackson",
    ironMan: "Roberto Jr",
    vision: "Paul bettany",
    activo: true,
    poder: 1500.2333,
  };

  const printAvengers = ({ vision, ...resto }: Avenger) => {
    // console.log(vision, resto);
  };
  printAvengers(avengers);

  //   const  {poder,vision } = avengers
  //   console.log(poder.toFixed(2),vision.toUpperCase())

  const avengersArr:[string,boolean, boolean] = ['Capitan America',true, false]

//   const ironMan = avengersAr
//    const [capitanA, ironMan,numero ] = avengersArr;
//   console.log({capitanA,ironMan, numero})

})();
