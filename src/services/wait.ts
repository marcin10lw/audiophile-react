export const wait = (exampleDelay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, exampleDelay);
  });
