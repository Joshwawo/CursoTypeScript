(()=>{

    //*lastName?  = parametro Opcional
    const fullName = (firstName:string, LastName?:string):string=>{

        return `${firstName} ${LastName || 'no last Name'}`;

    }
    let noName : string;
    const name  = fullName('maloso');


    console.log({name})
})()