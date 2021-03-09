const sentence = "hello there from lighthouse labs";
let delay = 0; // start delay at 0 seconds

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // print characters in 'char' loop
  }, delay)
  delay += 50; // increase delay by 50 each time
};

setTimeout(() => {
  console.log(' ');
}, delay+1); // once loop is finished, this will console log a space after the sentence to avoid merging with terminal command line