// var x = 5;
//
// switch(x) {
//   case 1:
//     console.log('case 1');
//     break;
//   case 2:
//     console.log('case 2');
//     break;
//   case 3:
//     console.log('case 3');
//     break;
//   default:
//     console.log('the case is: ', x)
//     break;
// }

function count(x) {
  var numbers = [];
  if ( x % 2 === 0) { // TODO check that x is even
    for ( i = 0; i < x; i = i + 2 ) { // TODO assign i to 0; give i the limit of x; and increment by 2
      numbers.push(i);
    }
  } else {
    for ( i = 1; i < x; i = i + 2 ) { // TODO assign i to 1; give i the limit of x; and increment by 2
      numbers.push(i);
    }
  }
  return numbers;
}
