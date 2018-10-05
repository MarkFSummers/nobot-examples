process.stdout.write ('Hello, Please enter some text here \n');
process.stdout.write (`This script is runing from ${process.cwd()}\n`);

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`you wrote: ${chunk}`);
        process.exit(0);
    }
});