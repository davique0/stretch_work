//Write a program that takes any number of command line arguments, all strings, and reverses them before outputting them one at a time to the console
const args = process.argv.slice(2)

const reverse = (arr) => {
  for (const item of arr) {
    let rvsWord = '';
    let itmArr = item.split('')
    for (let i = (itmArr.length - 1); i >= 0; i--) {
      rvsWord += itmArr[i]
    }
    console.log(rvsWord);
  }
}
reverse(args);
