// Write a program that takes any number of command line arguments, converts each to pig latin (the rules are in the next paragraph), then puts the translated words together into one sentence logged to the console.

// The true pig latin rules would be a bit difficult to implement, so let's simplify them. Convert a word to pig latin by taking its first letter, moving it to the end of the word, then adding "ay" after it all.
const args = process.argv.slice(2)

const latinPig = (argArr) => {
  let result = '';
  for (const item of argArr) {
    let decon = item.split('');
    let firstLetter = decon.shift()
    decon = decon.join('')
    result = `${decon}${firstLetter}ay`
    console.log(result)
  }
}

latinPig(args)