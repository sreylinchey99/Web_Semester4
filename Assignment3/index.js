
var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "linatkit",
    database: 'students'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // Create table name 'student'
    var sql = "CREATE TABLE student (rollno INT(6), name VARCHAR(20), branch VARCHAR(20))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // Insert data into table 'student'
    var sql = "INSERT INTO student(rollno, name , branch ) VALUES(5, 'Chey Sreylin', 'SoftwareEnginneer')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Inserted table successfully");
    });


    // Add new column 'class' into table 'student'
    var sql = "ALTER TABLE student ADD COLUMN class VARCHAR(20)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Alter table successfully");
    });

    // delete a row from table 'student'
    var sql = "DELETE FROM student WHERE rollno = 5";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Deleted row successfully");
    });

    // Drop column branch from table 'student'
    var sql = "ALTER TABLE student DROP COLUMN Branch";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Dropped column branch successfully");
    });

    // Alter table by changing the data type of rollno to number(8).
    var sql = "ALTER TABLE student MODIFY COLUMN rollno INT(8)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Changed successfully");
    });

    //  Delete all the data from student table.
    var sql = "DELETE FROM student";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Delete all data successfully");
    });

    //  DROP TABLE student
    var sql = "DROP TABLE student";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("DROP TABLE student successfully");
    });

    con.end(err=>{});
  }
);