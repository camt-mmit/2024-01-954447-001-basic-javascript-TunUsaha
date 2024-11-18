import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Input star size: ', (input) => {
    const size = parseInt(input);

    if (size < 1) return;

    if (size === 1) {
        console.log('*');
    } else {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '*';
    }
    console.info(line);

    for (let i = 0; i < size - 2; i++) {
        line = '';
        line += '*';
        for (let j = 0; j < size - 2; j++) {
            line += ' ';
        }
        line += '*';
        console.info(line);
    }

    line = '';
    for (let i = 0; i < size; i++) {
        line += '*';
    }
    console.info(line);
    }
    rl.close();
});
