var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /**con.query("CREATE DATABASE mydb", function(err, result) {
        if (err) throw err;
        console.log("Database created");
    });
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table altered");
    });
    var sql = "INSERT INTO customers (name, address) VALUES ('Facebook Inc', 'Silicon Valley')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    con.query("SELECT * FROM customers", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    con.query("SELECT name, address FROM customers", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    con.query("SELECT * FROM customers", function(err, result, fields) {
        if (err) throw err;
        console.log(result[2].address);
        console.log(fields);
        console.log(fields[1].name);
    }); 
    con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    var companyName = 'Facebook Inc';
    var sql = 'SELECT * FROM customers WHERE name = ' + mysql.escape(companyName);
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ?';
    con.query(sql, [adr], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name, adr], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    con.query("SELECT * FROM customers ORDER BY name", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    con.query("SELECT * FROM customers ORDER BY name DESC", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var myArray = [
        ['Kimberly', 'Elimgbu'],
        ['Constance', 'G.R.A']
    ];
    con.query(sql, [myArray], function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " rows of data added.");
    });
    var sql = "UPDATE customers SET address = 'Government Area' WHERE address = 'G.R.A' ";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " of data changed.");
    });
    var sql = "SELECT * FROM customers LIMIT 7";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    Start from position 4, and return the next 7 records:
    var sql = "SELECT * FROM customers LIMIT 3, 7";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    var sql = "ALTER TABLE customers ADD COLUMN favorite_product VARCHAR(255)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table altered");
    });
    var sql1 = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
    con.query(sql1, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
    Two tables can be combined by using users' favorite_product field and products' id field.
    var sql = "SELECT customers.name AS user, products.name AS favorite FROM customers JOIN products ON customers.favorite_product = products.id";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:
    var sql = "SELECT customers.name AS user,products.name AS favorite FROM customers LEFT JOIN products ON customers.favorite_product = products.id";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    var sql = "SELECT customers.name AS user, products.name AS favorite FROM customers RIGHT JOIN products ON customers.favorite_product = products.id";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });**/

});

//con.end();