var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@student.zmhykz7.mongodb.net/?retryWrites=true&w=majority";

// 1. Create table student 
// MongoClient.connect(url, function(err, db) {
// if (err) throw err;
//     var dbo = db.db("StudentDB");
//     dbo.createCollection("student", function(err, res)
// {
// if (err) throw err;
//     console.log("Collection created!");
//     db.close();
// });
// });


// 2. Insert data into table student
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db('StudentDB');
//     var myobj = [
//                 {rollno: 1 ,name: 'sreylinchey', branch: 'SE'}, 
//                 {rollno: 2 ,name: 'sreylinchey', branch: 'SE'},
//                 {rollno: 3 ,name: 'sreylinchey', branch: 'SE'},
//                 {rollno: 4 ,name: 'sreylinchey', branch: 'SE'},
//                 {rollno: 5 ,name: 'sreylinchey', branch: 'SE'},
//                 ];
//     dbo.collection('student').insertMany(myobj, function(err, res){
//         if (err) throw err;
//         console.log('document inserted');
//         db.close();
//     });
// });


// 3. Alter new table by adding new column 
// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db('StudentDB');
//     dbo.collection('student').update({}, {$set: {'class': 'Python Programming'}}, function(err, res){
//         if (err) throw err;
//         // console.log(res);
//         console.log('Alter table successfully');
//         db.close();
//     });
// });


// 4 . delete a row from table 
// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db('StudentDB');
//     var myquery = {rollno: 1};
//     dbo.collection('student').deleteOne(myquery, function(err, res){
//         if (err) throw err;
//         console.log('delete row from table successfully');
//         db.close();
//     });
// });

// 5. drop column branch 
// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db('StudentDB');
//     var d_table = dbo.collection('student');
//     d_table.updateMany({}, {$unset: {branch: 'SE'}}, function(err, res){
//         if (err) throw err;
//         console.log('drop column successfully');
//         db.close();
//     });
// }); 

// 6. alter table by changing datatype 


// 7 . Delete all the data from student table
// MongoClient.connect(url, function(err, db){
//     if (err) throw err;
//     var dbo = db.db('StudentDB');
//     var myquery = {'name': 'sreylinchey'};
//     dbo.collection('student').deleteMany(myquery, function(err, res){
//         if (err) throw err;
//         console.log('deleted all data successfully');
//         db.close();
//     })
// })

// 8 . delete the table 
MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db('StudentDB');
    dbo.collection('student').drop(function(err, res){
        if (err) throw err;
        console.log('deleted table successfully');
        db.close();
    })
})







