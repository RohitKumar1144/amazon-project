import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite : formatCurrency');

console.log('coverts cents into dollars');
if(formatCurrency(2095) === '20.95'){
  console.log("passed");
} else{
  console.log('failed');
}

console.log('works with zero');
if(formatCurrency(0) === '0.00'){
  console.log("passed");
} else{
  console.log('failed');
}

console.log('round off to upper cent');
if(formatCurrency(2000.5) === '20.01'){
  console.log("passed");
} else{
  console.log('failed');
}

console.log('round off to lower cent');
if(formatCurrency(2000.4) === '20.00'){
  console.log("passed");
} else{
  console.log('failed');
}