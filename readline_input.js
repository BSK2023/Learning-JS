const readline = require('readline');
r1 = readline.createInterface(
    {
      input: process.stdin,
      output: process.stdout
    }
);

r1.question('what color is your eyes \n', (name)=> {console.log (`${name}`); r1.close();} );
            