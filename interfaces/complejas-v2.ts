(() => {
    interface Client {
      name: string;
      address: Address;
      age?: number;
      getFullName(id:string):void;
      
    }
  
    interface Address {
      id: number;
      zip: string;
      city: string;
    }
  
    const client: Client = {
      name: "jorge",
      age: 22,
      address: {
        id: 123,
        zip: "KAKA",
        city: "Mejixo",
      },
      getFullName(id:string) {
          return this.address.city
      },
    };
  
    const client2: Client = {
      name: "Karen",
      age: 22,
      address:{
          city:'Hermo',
          id:12,
          zip:'JDCW XP'
      },
      getFullName(id:string) {
        return this.address.city
    },
    };
  
    // console.log(client2)
  })();
  