(() => {
  // const addNumber = (a:number, b:number) =>{
  //     return a +b;
  // }

  const addNumber = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWord = () => `El mundo esta salvado`;

  // let myFunc:(a:number, b:number)=>number;
  // let myFunc:(a:string)=>string;
  let myFunc: () => string;

  // myFunc = 12

  console.log(myFunc);

  // myFunc = addNumber
  // console.log(myFunc(2,4))

  // myFunc = greet
  // console.log(myFunc('as'))

  myFunc = saveTheWord;
  console.log(saveTheWord());
})();
