const ps=require("prompt-sync");
const prompt=ps();

const fs=require("fs");
const path = require("path");



let command=prompt("Enter the command  ");
let cmdarray=command.split(" ");






function pwd()
{
    console.log(process.cwd());
}


// const ls = (dir = ".") => {
//   fs.readdir(dir, (err, files) => {
//     if (err) throw err;
//     console.log(files.join("\n"));
//   });
// };

function ls(dir=".")


const cp = (src, dest) => {
  fs.copyFile(src, dest, (err) => {
    if (err) throw err;
    console.log(`${src} was copied to ${dest}`);
  });
};


const mv = (src, dest) => {
  fs.rename(src, dest, (err) => {
    if (err) throw err;
    console.log(`${src} was moved to ${dest}`);
  });
};


const mkdir = (dir) => {
  fs.mkdir(dir, (err) => {
    if (err) throw err;
    console.log(`Directory "${dir}" created`);
  });
};


const rm = (file) => {
  fs.unlink(file, (err) => {
    if (err) throw err;
    console.log(`${file} was deleted`);
  });
};
console.log(cmdarray[0]);

switch (cmdarray[0]) {
  case "ls":
    ls(cmdarray[1]);
    break;
  case "cp":
    cp(cmdarray[1],cmdarray[2]);
    break;
  case "mv":
    mv(cmdarray[1],cmdarray[2]);
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



