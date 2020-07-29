let args = process.argv;
args = args.slice(2);

for (let i in args) {
  if ((Number(args[i]) * 1000) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(args[i]) * 1000);
  }
}
