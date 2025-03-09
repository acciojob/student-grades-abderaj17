const fs = require("fs");
fs.readFile('student.csv', 'utf8', function (err, data) {
    if(err){
        return console.error(err);
    }   
    let rows = data.split('\n');
    rows = rows.map(row => row.split(','));
    for(let i = 1; i < rows.length; i++){
        let sum = 0;
        for (let j = 1; j < rows[i].length; j++) {
            sum += Number(rows[i][j]);
        }
        let avg = sum/ (rows[i].length - 1);
        console.log(`Average grade for ${rows[i][0]}: ${avg}`);
    }
})