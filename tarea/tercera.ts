(()=>{
   
type cart ={
    carroceria:string,
    modelo:string,
    antibalas:boolean,
    pasajeros:number,
    disparar?:()=>string  //*Pero como no regresa nada es VOID  *disparar?:()=>string
  }
  // Objetos
  const batimovil:cart = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  type villlano ={
    nombre:string,
    edad:number | undefined ,
    mutante:boolean
  }
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos:villlano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type charles ={
    poder:string,
    estatura:number
  }
  
  type apocalipsis ={
    lider:boolean,
    miembros:string[]
  }
  
  
  const charles:charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  const apocalipsis:apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique:charles | apocalipsis;

  console.log(charles)
  console.log(apocalipsis)
  
  mystique = charles;
  mystique = apocalipsis;
   
})()