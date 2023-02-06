const ps = require("prompt-sync");
const prompt=ps();
const fs = require("fs");
const path = require("path");
const command= prompt("Enter the command  ");
const cmdarray = command.split(" ");
function pwd() {
    console.log(process.cwd());
}
function ls(dir) {
    if (dir === void 0) { dir = "."; }
    fs.readdir(dir, function (err, files) {
        if (err)
            throw err;
        console.log(files.join("\n"));
    });
}
function cp(src, dest) {
    fs.copyFile(src, dest, function (err) {
        if (err)
            throw err;
        console.log("".concat(src, " was copied to ").concat(dest));
    });
}
;
function mv(src, dest) {
    fs.rename(src, dest, function (err) {
        if (err)
            throw err;
        console.log("".concat(src, " was moved to ").concat(dest));
    });
}
;
function mkdir(dir) {
    fs.mkdir(dir, function (err) {
        if (err)
            throw err;
        console.log("Directory \"".concat(dir, "\" created"));
    });
}
;
function rm(file) {
    fs.unlink(file, function (err) {
        if (err)
            throw err;
        console.log("".concat(file, " was deleted"));
    });
}
;
switch (cmdarray[0]) {
    case "ls":
        ls(cmdarray[1]);
        break;
    case "cp":
        cp(cmdarray[1], cmdarray[2]);
        break;
    case "mv":
        mv(cmdarray[1], cmdarray[2]);
        break;
    case "mkdir":
        mkdir(cmdarray[1]);
        break;
    case "rm":
        rm(cmdarray[1]);
        break;
    case "pwd":
        pwd();
        break;
    default:
        console.log("Invalid command");
        break;
}
