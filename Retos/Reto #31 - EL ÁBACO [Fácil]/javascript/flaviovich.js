/*
 * Crea una función que sea capaz de leer el número representado por el ábaco.
 * - El ábaco se representa por un array con 7 elementos.
 * - Cada elemento tendrá 9 "O" (aunque habitualmente tiene 10 para realizar operaciones)
 *   para las cuentas y una secuencia de "---" para el alambre.
 * - El primer elemento del array representa los millones, y el último las unidades.
 * - El número en cada elemento se representa por las cuentas que están a la izquierda del alambre.
 *
 * Ejemplo de array y resultado:
 * ["O---OOOOOOOO",
 *  "OOO---OOOOOO",
 *  "---OOOOOOOOO",
 *  "OO---OOOOOOO",
 *  "OOOOOOO---OO",
 *  "OOOOOOOOO---",
 *  "---OOOOOOOOO"]
 *
 *  Resultado: 1.302.790
 */

const getNumber = (value, index) => value * "1".padEnd(7 - index, "0");

const abacus = (array) => {
  return array.reduce((acc, val, i) => {
    const value = val.indexOf("---");
    return (acc += getNumber(value, i));
  }, 0);
};

const array = [
  "O---OOOOOOOO",
  "OOO---OOOOOO",
  "---OOOOOOOOO",
  "OO---OOOOOOO",
  "OOOOOOO---OO",
  "OOOOOOOOO---",
  "---OOOOOOOOO",
];
console.clear();
console.log(abacus(array));
