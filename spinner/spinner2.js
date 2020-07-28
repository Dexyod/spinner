const spinner = ["\r| ", "\r/  ", "\r- ", "\r\\ ", "\r|  ", "\r\n"];
let timeout = 100;
for (const i of spinner) {
  timeout += 200;
  setTimeout(() => {
    process.stdout.write(i);
  }, timeout);
}
