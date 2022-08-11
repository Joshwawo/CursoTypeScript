(() => {
  let avenger: any;
  let exist;
  let power;

  avenger = "Doc Strange";
//   console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0));
  avenger = 150.123123;
  console.log((<number> avenger).toFixed(2));
  console.log(<number> avenger.toFixed(2));
  console.log(exist);
  console.log(power);
})();
