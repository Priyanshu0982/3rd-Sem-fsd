const fs = require("fs");

function checkFileSize(filename, maxSize) {
    fs.stat(filename, (err, stats) => {
        if (err) {
            console.log(err);
            return;
        }

        if (stats.size > maxSize) {
            console.log(`${filename} is too large.`);
        } else {
            console.log(`${filename} is within the allowed size.`);
        }

        console.log(`Size: ${stats.size} bytes`);
    });
}

checkFileSize("notes.txt", 1000);   