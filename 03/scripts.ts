const entrada: number[] = [1, 5, 2];

const tabulada = (arreyNumerico: number[]): void => {
  for (let numero of arreyNumerico) {
    let multiplicador: number = 0;
    while (multiplicador <= 10) {
      console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);

      if (multiplicador === 10) {
        console.log("----------");
      }

      multiplicador++;
    }
  }
};

tabulada(entrada);
