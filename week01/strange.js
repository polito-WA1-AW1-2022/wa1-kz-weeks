/* Strange JS behaviors and where to find (some of) them */
'use strict';

const type = typeof NaN;
console.log('NaN is a ' + type);
console.log(`NaN === NaN? ${NaN === NaN}\n`);

console.log(`null == false? ${null == false}`);
console.log(`'' == false? ${'' == false}`);
console.log(`3 == true? ${3 == true}\n`);

console.log(`true + true = ${true + true}`);
console.log(`true !== 1? ${true !== 1}`);

console.log(`5 + '10' = ${5 + '10'}\n`);

console.log(`1 < 2 < 3? ${1 < 2 < 3}`);
console.log(`3 > 2 > 1? ${3 > 2 > 1}\n`);

console.log(`0.2 + 0.1 === 0.3? ${0.2 + 0.1 === 0.3}\n`);

console.log('b' + 'a' + + 'a' + 'a');