const process = require("process")



let sum = 0;

// Loop through the arguments starting from index 2
for (let i = 2; i < process.argv.length; i++) {
    
    sum += Number(process.argv[i]);
}


console.log(sum);