// => Create node Js file systems 

// 1. Create file using append 
var file_s = require('fs');
file_s.writeFile('index.html','HIII', function(err) {
  if (err) throw err;
  console.log("File created successfully !!");
});

// 2. append file 
var file_s = require('fs');
file_s.appendFile("index.html", 'Hello welcome to Kirirom!', function(err){
  if (err) throw err;
  console.log("File appended successfully!");
});

// 3. close file 
const file_s = require('fs');
open_f = file_s.openSync('index.html');
console.log("file open successfully!");
file_s.close(open_f, (err) => {
  if (err)
    console.error('Failed to close the file!', err);
  else {
    console.log("File Closed successfully!");
  }
});

// 4. delete 
var file_s = require('fs');
file_s.unlink('index.html', function(err){
  if (err) throw err; 
  console.log('File deleted !');
});

// 5. Rename file 
var file_s = require('fs');
file_s.rename("index.html", "new_index.html", function(err){
  if (err) throw err;
  console.log("File rename successfully !");
});  

// 6. Update 
var file_s = require('fs');
file_s.writeFile("new_index.html", '<!-- <!DOCTYPE html> -->', function(err){
  if (err) throw err;
  console.log("File updated !");
});