(() => {
  const hero: string = "Flash";

  function returName(): string {
    return hero;
  }

  const ActiveBatiSeñal = ():string => {
    return "Bati Señal Activada!";
  };

  console.log(typeof ActiveBatiSeñal);

  const heroName = returName();
})();
