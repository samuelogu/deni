// const { exec } = require('child_process');

// const script = exec('ls');
// console.log(script);

// exec('echo "The \\$HOME variable is $HOME"');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
    const { stdout, stderr } = await exec('ls');
    const files = stdout.split(/\r?\n/);
    console.log(files);
    // console.error('stderr:', stderr);
}
lsExample();
