// function loopyLighthouse(range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(i)
//     }
//   }
// }

// const loopyLighthouse = (range, multiples, words) => {
//   let newArr = [];
//   for (let i = range[0]; i <= range[1]; i++) {
//     newArr.push(i)
//   }
//   newArr.map(x => {
//     x % multiples[0] === 0 && x % multiples[1] === 0 ? console.log(`${words[0]} ${words[1]}`) : x % multiples[0] === 0 ? console.log(words[0]) : x % multiples[1] === 0 ? console.log(words[1]) : console.log(x)
//   });
// }

// const loopyLighthouse = (range, multiples, words) => {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (!(i % multiples[0]) && !(i % multiples[1])) console.log(`${words[0]} ${words[1]}`);
//     if (!(i % multiples[0])) console.log(words[0]);
//     if (!(i % multiples[1])) console.log(words[1]);
//     if ((i % multiples[0]) && (i % multiples[1])) console.log(i);
//   }
  
// }

const loopyLighthouse = (range, multiples, words) => {
  for (let i = range[0]; i <= range[1]; i++) {
    console.log((i % multiples[0] ? '' : words[0]) + (i % multiples[1] ? '' : words[1]) || i);
  }
}

loopyLighthouse([5, 40], [5, 7], ['Mario', 'David']);