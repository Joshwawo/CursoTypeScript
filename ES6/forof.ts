(()=>{


    type Avenger = {
        name:string,
        weapon:string,
    }

    const ironMan:Avenger ={
        name:'Toño estar',
        weapon:'ArmorSuit'
    }

    const capitanA:Avenger ={
        name:'Esteban Roger',
        weapon:'Shield'
    }
    const thor:Avenger ={
        name:'thortilla',
        weapon:'Mjornir'
    }

    const avengers:Avenger[] =[ironMan,thor,capitanA,];

   for (const avenger of avengers) {
     console.log(avenger.name,avenger.weapon)
   }

})()