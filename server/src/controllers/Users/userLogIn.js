const pg = require("pg");
const bcrypt = require("bcrypt");
const { PG_REMOTE_USER, PG_REMOTE_HOST, PG_REMOTE_DATABASE, PG_REMOTE_PASSWORD, PG_REMOTE_PORT } = process.env

const userLogIn = async (email, password) => {
     
    //CONEXION  A BASE DE DATOS REMOTA
    const db = new pg.Client({
        user: PG_REMOTE_USER,
        host: PG_REMOTE_HOST,
        database: PG_REMOTE_DATABASE,
        password: PG_REMOTE_PASSWORD,
        port: PG_REMOTE_PORT,
        ssl: {
        rejectUnauthorized: false
        }
    });

    db.connect();

    const findUser = await db.query("SELECT * FROM users WHERE email = $1" , [email]);

      //Si el resistro existe
      if (findUser.rows.length > 0) {
        //Si la password corresponde lo logueo
        const user = findUser.rows[0];
        const storedPassword = user.password;

        if (bcrypt.compareSync(password, storedPassword)) {
          // Passwords match
          console.log(user, "password ok");
          return user;

        } else {
          console.log("password not ok");

          // Passwords don't match
          throw new Error ("Passwords don't match")
        }
      }
      else throw new Error ("The user doesn't exist");
    

};

module.exports = userLogIn;
