function checkPal (str)
{
    const len = str.length-1;

    for (let i = 0; i <=len/2; i++)
       { if(str[i] !== str[len-i])
        {
        console.log(`${str} is not a palindrome`);
        return;
        }
        } 
        console.log(`${str} is a Palindrome!`);
    }
const userinput = require('readline-sync');
let useroutput = userinput.question("Enter a word\n");
let str1 = useroutput;
checkPal(str1);


