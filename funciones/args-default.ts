(()=>{

    //*lastName?  = parametro Opcional
    const fullName = (firstName:string, LastName?:string, upper:boolean = false):string=>{

        if(upper){
            
            return `${firstName} ${LastName || 'no last Name'}`.toUpperCase();
        }else{
            return `${firstName} ${LastName || 'no last Name'}`;

        }


    }
    let noName : string;
    const name  = fullName('maloso','stark', true);


    console.log({name})
})()