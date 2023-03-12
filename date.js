function currentdaytime (ui)
{
    let res = null;
    
   if (ui == "Date" || ui == "date")
    {
    res =   {
                date : new Date(),
            }
            res.day = res.date.toLocaleDateString();
             return(JSON.stringify(res.day));
    }

    else if (ui == "Time" || ui == "time")
    {
        res = {
                time : new Date(),
              }
            res.localtime = res.time.toLocaleTimeString();
            return (JSON.stringify(res.localtime));
    }
    else
    return null;
}

const m1 = require (`readline-sync`);
let input = m1.question('What would you like to know?\t');
let result = null;
switch(input)
{
    case "time":
    case "Time":
        result = currentdaytime(input);
        console.log(`Current time is: ${result}`); 
        break;
        
    case "Date":
    case "date":
        result = currentdaytime(input);    
        console.log(`Current date is: ${result}`); 
        break;
}


