
var express = require("express"),
  router = express.Router();

var path = require("path");

var mysql = require("mysql");

// const bcrypt = require('bcrypt');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cbtdatabase"
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/questions", function (req, res) {
  con.query("SELECT * FROM questions", function (err, result, fields) {
    //if (err) throw err;
    res.send(result);
  });
  //con.end();
});

router.post("/saveAcademicSession", function (resp) {
  if (resp.method === "POST") {
    resp.on("data", function (chunk) {
      var values = [[chunk.toString()]];

      var sql = "INSERT INTO sessions (title) VALUES ? ";
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });

    /**resp.on('end', () => {
            con.end();
        });**/
  }
});

router.post("/saveTerm", function (resp) {
  if (resp.method === "POST") {
    resp.on("data", function (chunk) {
      var values = [JSON.parse(chunk)];

      var sql = "INSERT INTO terms (sDate, eDate, title) VALUES ? ";
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });

    /**resp.on('end', () => {
            con.end();
        });**/
  }
});

router.post("/saveSubject", function (resp) {
  if (resp.method === "POST") {
    resp.on("data", function (chunk) {
      var values = [[chunk.toString()]];

      var sql = "INSERT INTO subjects (title) VALUES ? ";
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });
  }
});

router.post("/saveStudent", function (resp) {
  if (resp.method === "POST") {
    resp.on("data", function (chunk) {
      var values = [JSON.parse(chunk)];
      var password = values[0][3];

      // bcrypt.hash(values[0][3], 10, function(err, hash) {
      //     values[0][3] = hash;
      //     var sql = "INSERT INTO students (lastName,firstName,class,password) VALUES ? ";
      //     con.query(sql, [values], function(err, result) {
      //         if (err) throw err;
      //     });
      // });

      var sql =
        "INSERT INTO students (lastName,firstName,class,password) VALUES ? ";
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });
  }
});

router.post("/saveNameOfClass", function (resp) {
  if (resp.method === "POST") {
    resp.on("data", function (chunk) {
      var values = [[chunk.toString()]];

      var sql = "INSERT INTO classes (name) VALUES ? ";
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });

    /**resp.on('end', () => {
            con.end();
        });**/
  }
});

router.post("/saveTeacher", function (resp) {
  if (resp.method === "POST") {
    resp.on("data", function (chunk) {
      var values = [JSON.parse(chunk)];
      var password = values[0][3];

      // bcrypt.hash(values[0][3], 10, function(err, hash) {
      //     values[0][3] = hash;
      //     var sql = "INSERT INTO teachers (lastName,firstName,staffId,password) VALUES ? ";
      //     con.query(sql, [values], function(err, result) {
      //         if (err) throw err;
      //     });
      // });

      var sql =
        "INSERT INTO teachers (lastName,firstName,staffId,password) VALUES ? ";
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
      });
    });
  }
});

router.post("/userLogin", function (req, res) {
  if (req.method === "POST") {
    req.on("data", function (chunk) {
      var values = [JSON.parse(chunk)];
      var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
      con.query(sql, [name, adr], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      });

      // bcrypt.compare('somePassword', hash, function(err, res) {
      //     if (res) {
      //         // Passwords match
      //     } else {
      //         // Passwords don't match
      //     }
      // });
    });
  }
});

/**router.get('/css/indexstyle.css', function(req, res) {
    res.sendfile("./css/indexstyle.css");
});

router.get('/javascript/indexscript.js', function(req, res) {
    res.sendfile("./javascript/indexscript.js");
});**/

module.exports = router;
