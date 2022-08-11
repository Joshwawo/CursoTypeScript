(() => {
  const batman: string = "batman";
  const linternaVerde: string = "Linterna's Verde";
  const volcanNegro: string = `Linterna's Verde`;
  console.log(`I'm ${batman}`);

  console.log(batman.toLocaleUpperCase());

  console.log(batman[10]?.toLocaleUpperCase() || 'No esta presente')
})();
