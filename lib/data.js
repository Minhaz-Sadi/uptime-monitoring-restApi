const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

const lib = {};


// base directory of the data folder

lib.basedir = path.join(__dirname, '/../.data/');

// write data to file

lib.create = function(dir, file, data, callback) {
    // open file for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', function(err, fileDescriptor){
        if(!err && fileDescriptor){
            // convert data to string
            const stringData = JSON.stringify(data);

            fs.writeFile(fileDescriptor, stringData, function(err){
                if(!err){
                    fs.close(fileDescriptor, function(err){
                        if(!err){
                            callback(false);
                        } else{
                            callback('Error closing the new file!');
                        }
                    })
                } else{
                    callback('Error writing to new file!');
                }
            })
        } else {
            callback('could not create new file, it may already exists!')
        }
    })
};


lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8', (err, data)=>{
        callback(err, data);
    })
}


lib.update = (dir, file, data, callback) => {
    // file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor)=>{
        if(!err && fileDescriptor){
            const stringData = JSON.stringify(data);

            fs.ftruncate(fileDescriptor, (err)=>{
                if(!err){
                    fs.writeFile(fileDescriptor, stringData, (err)=>{
                        if(!err){
                            fs.close(fileDescriptor, (err)=>{
                                if(!err){
                                    callback(false);
                                } else{
                                    callback('Error closing file')
                                }
                            })
                        } else{
                            callback('Error writing file')
                        }
                    })
                } else{
                    callback('Error trancating File');
                    
                }
            });
        } else{
            callback(`Error updating. File may not exists`);
            
        }
    })
}


// delete

lib.delete = (dir, file, callback) => {
    // unlink
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err)=>{
        if(!err){
            callback(false);
        } else{
            callback(`Error deleting file`);
        }
    })
}


// list all the items in a directory
lib.list = (dir, callback) => {
    fs.readdir(`${lib.basedir + dir}/`, (err, fileNames) => {
        if (!err && fileNames && fileNames.length > 0) {
            const trimmedFileNames = [];
            fileNames.forEach((fileName) => {
                trimmedFileNames.push(fileName.replace('.json', ''));
            });
            callback(false, trimmedFileNames);
        } else {
            callback('Error reading directory!');
        }
    });
};
module.exports = lib;