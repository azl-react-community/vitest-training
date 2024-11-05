export const add = (a: number, b: number) => a + b
export const subtract = (a: number, b: number) => a - b

export const log = (message: string) => {
  console.log(message);
}

export const addWithLog = (a:number, b:number) => {
  const result = a + b;
  log(`The result is ${result}`);
  return result;
}