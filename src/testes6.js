import fs from 'fs';

const data = fs.readFileSync('./test_gfg.txt', 'UTF-8');

console.log(data);

export { data };