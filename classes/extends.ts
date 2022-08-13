(()=>{

    class Avenger {
        constructor(
            public name: string,
            public realName: string,

        ){
            // console.log('Contructor Avenger Llamado')
        }

        private getFullname(){
            return `${this.name}, ${this.realName}`
        }

        
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ){
            super(name,realName)
            // console.log('Constructor xmen llamado')
            
        }

       get fullName(){
        return `${this.name} - ${this.realName}`
       }

       set fullName(name:string){

            if (name.length <3){
                // throw new Error('El Nombre tiene que ser mayor a 3 letras')
            }
            this.name = name 
       }

        getFullNameDesdeXmen(){
            // console.log(super.getFullname())
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan',true)
    // console.log(wolverine.fullName)
    // wolverine.fullName = 'jo'
    // console.log(wolverine.fullName)
    // wolverine.getFullNameDesdeXmen()


})()