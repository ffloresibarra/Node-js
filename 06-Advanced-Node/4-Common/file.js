const fs = require('fs');

fs.readFile(__filename, (err, data)=>{
    if(err) throw err;
})

const data= fs.readFileSync(__filename)