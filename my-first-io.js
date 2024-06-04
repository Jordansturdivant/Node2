
const fs = require('fs');
const filePath = process.argv[2];

try{
    const files = fs.readFileSync(filePath, 'utf8');
const fileContainer = files.split('\n').length - 1;
console.log(fileContainer)
} catch{
    console.log(err)
}



console.log(numberOfLines);
