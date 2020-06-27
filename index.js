const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database('./data/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });
  
  db.serialize(() => {
    db.each(`SELECT PlaylistId as id,
                    Name as name
             FROM playlists`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    });
  });
  
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });

app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/assets"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => { 
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => { 
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("./admin/login");
});

app.get("/add_post", (req, res) => {
    res.render("./admin/add_post");
});

app.get("/add_user", (req, res) => {
    res.render("./admin/add_user");
});

app.get("/list_posts", (req, res) => {
    res.render("./admin/list_posts");
});

app.get("/list_user", (req, res) => {
    res.render("./admin/list_user");
});

app.get("/read_post", (req, res) => {
    res.render("./admin/read_post");
});

app.get("/update_post", (req, res) => {
    res.render("./admin/update_post");
});

app.get("/update_user", (req, res) => {
    res.render("./admin/update_user");
});