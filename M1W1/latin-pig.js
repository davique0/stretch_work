// Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next paragraph), then puts the translated words together into one sentence logged to the console.

// The true pig latin rules would be a bit difficult to implement, so let's simplify them. Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.
const args = process.argv.slice(2)

let result = '';
const latinPig = (argArr) => {
  for (const item of argArr) {
    let tempHold = ''
    let decon = item.split('');
    let firstLetter = decon.shift()
    decon = decon.join('')
    tempHold = `${decon}${firstLetter}ay`
    result += tempHold + ' ';
  }
  console.log(result)
}

latinPig(args)