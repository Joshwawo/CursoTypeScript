(()=>{

abstract class Mutante{
    constructor(
        public name: string,
        public realName:string
    ){
        
    }
}

class Xmen extends Mutante{
    salvarMundo(){
        return 'Mundo a salvo'
    }
}

class Villian extends Mutante{

    mundo(){
        return 'Mundo Conjustado'
    }

}

const wolverine = new Xmen('Wolverine', 'Logan')
const magneto = new Villian('Magneto', 'Magnus')

const impName= (character:Mutante)=>{
    console.log(character.realName)
}

// impName(magneto)
// print('lolo')
// console.log(wolverine.salvarMundo())
// console.log(villano.mundo())

})()