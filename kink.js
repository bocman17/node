const { readFile } = require('fs')

console.log('started a first task');
// Check File PATH!!!!!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) { 
        console.log(err);
        return
    } else {
        console.log(result);
        console.log('completed first task');
    }
})
console.log('starting next task');