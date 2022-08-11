(()=>{


    const fullName = (firstName:string, ...restoNombre:string[])=>{

        return `${firstName} ${restoNombre.join(' ')} `

    }

    const superman  = fullName('Clark', 'Joseph', 'Kent', 'Pancho');

    console.log({superman})

})()