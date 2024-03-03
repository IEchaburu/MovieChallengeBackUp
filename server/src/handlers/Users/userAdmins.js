const { Router } = require("express");
const express = require("express");
require("dotenv").config();
const passport = require("passport");
const { Strategy } = require("passport-local");
const session = require("express-session");
const bodyParser = require("body-parser");
const pg = require("pg");
const bcrypt = require("bcrypt");

const app = express();

const userAdmin = Router();

app.use(bodyParser.urlencoded({extended: true}));


function initUserAdmin(app) {
  // MANEJO DE LOGIN Y SESIONES PARA USUARIOS
  app.use(session({
    secret: process.env.LOGIN_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 15, // 15 minutos de vigencia
    }
  }));
  app.use(passport.initialize());
  app.use(passport.session());  
  return true;
}

function dbConnect()  {
  //CONECTO CON LA BASE DE DATOS
  const db = new pg.Client({
  user: process.env.PG_REMOTE_USER,
  host: process.env.PG_REMOTE_HOST,
  database: process.env.PG_REMOTE_DATABASE,
  password: process.env.PG_REMOTE_PASSWORD,
  port: process.env.PG_REMOTE_PORT,
  ssl: {
    rejectUnauthorized: false
  }
  });
  db.connect();
  return db;
}


function initUserRoutes(app) {
  app.get("/secrets", (req, res) => {
    console.log(req.user);

    if (req.isAuthenticated())
      console.log("User authenticated");
    else
      console.log("User NOT authenticated");
    res.send("Finished secrets");
  });

  app.get("/logout", function (req, res) {  
    req.logOut(function(err) {
      if (err) {
          console.log("Logout error: ", err);
      } else {
          console.log("Logout OK");
      }
  });
  });

  app.get("/login", (req, res) => {
    console.log("Login Get");
    res.send('<div><h1><form action="/login" method="POST"><div class="form-group"><label for="email">Email</label><input type="email" class="form-control" name="mongo"/></div><div class="form-group"><label for="password">Password</label><input type="password" class="form-control" name="password"/></div><button type="submit" class="btn btn-dark">Login</button></form></h1></div>');
  });

  app.post("/login", passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  }) );
}



function passportNewStrategy(db) {
  return new Strategy(async function verify(username, password, cb) {
    try
    {
      //Busco que el mail exista
      const result = await db.query("SELECT * FROM users WHERE email = $1", [username]);

      //Si el resistro existe
      if (result.rows.length > 0)
      {
        //Si la password corresponde lo logueo
        const user = result.rows[0];
        const storedPassword = user.password;

        if (bcrypt.compareSync(password, storedPassword)) {
          // Passwords match
          console.log(user, "password ok");
          return cb(null, user);
        } else {
          console.log("password not ok");

          // Passwords don't match
          return cb("Password incorrecta", false);
        }
      }
      else
        return cb("El usuario no está registrado");
        //res.send("El usuario no está registrado");
    }
    catch (err) {
      return cb(err);
      //console.log(err);
    }
});
}


async function userRegister(db, username, password) {
  try
  {
    email=username;
    //Verificar que el registro no exista
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    //Si el resistro no existe
    if (result.rows.length == 0)
    {
      //Encripto la password
      let hash = bcrypt.hashSync(password, 10);
      console.log(hash);

      //Inserto el resgistro nuevo
      db.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",[email, hash], 
                  function(err, result) {
                  if (err) 
                    console.log("Error:" + err);
                  else {
                    //console.log("New Id:" + result.rows[0].id);
                    const user = result.rows[0];
                    console.log("Usuario: " + user.email);
                    return(user);
                  }
                }
              ); 
    }
    else 
      res.send("El mail " + email + " ya estaba registrado");
  }
  catch (err) {
    console.log(err); 
  }
}

module.exports = {initUserAdmin, dbConnect, initUserRoutes, passportNewStrategy, userRegister};



/* version sincrónita de comprare de bcrypt
if (bcrypt.compareSync('somePassword', hash)) {
 // Passwords match
} else {
 // Passwords don't match
}
*/