(()=>{

    class Apocalipsis{

        static intance:Apocalipsis;

       private constructor(
            public name:string

        ){

        }

        static llamarApolipsis():Apocalipsis{
                if(!Apocalipsis.intance){
                    Apocalipsis.intance = new Apocalipsis('Soy Apocalipsis')
                }
                return Apocalipsis.intance
        }

        changeName(newName:string):void{
            this.name = newName
        }
    }
    const apocalipsis1 = Apocalipsis.llamarApolipsis()
    const apocalipsis2 = Apocalipsis.llamarApolipsis()
    const apocalipsis3 = Apocalipsis.llamarApolipsis()

    apocalipsis1.changeName('Xavier')

    // const apocalipsis:Apocalipsis = new Apocalipsis('Soy Apocalipsis... el unico')
    // const apocalipsis2:Apocalipsis = new Apocalipsis('Soy Apocalipsis... el unico')
    // const apocalipsis3:Apocalipsis = new Apocalipsis('Soy Apocalipsis... el unico')
    // const apocalipsis4:Apocalipsis = new Apocalipsis('Soy Apocalipsis... el unico')
    // console.log(apocalipsis1)
    // console.log(apocalipsis2)
    // console.log(apocalipsis3)
    // console.log(apocalipsis4)

})()