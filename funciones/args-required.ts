(()=>{

    const fullName = (firstName:string, LastName:string):string=>{

        return `${firstName} ${LastName}`;

    }
    let noName : string;
    const name  = fullName(noName, 'maloso');


    console.log({name})
})()