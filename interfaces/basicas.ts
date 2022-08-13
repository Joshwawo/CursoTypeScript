(()=>{

    
    interface Hero  {
        name:string,
        age?:number,
        powers:number[],
        getName?:()=>string 
    }



    let flash:Hero = {
        name: 'Barry Alen ',
        age: 24,
        powers:[1,2]
    }

    let batman:Hero = {
        name: 'Blark ',
        age:70,
        powers:[1],
        getName() {
            return this.name
        },
    }

    // batman.getName.apply[Symbol]
    

})()