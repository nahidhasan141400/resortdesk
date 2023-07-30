const dotenv = require("dotenv");

dotenv.config();
const DataBase = require("./DBpoll");
const dbname = process.env.DB_NAME;

// chack if table exist or not
const chCash = {
  name: null,
  res: false,
};

const chackTable = async (name) => {
  if (chCash === name) {
    return chCash.res;
  }
  try {
    const DB = await DataBase();
    const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = '${name}' AND TABLE_SCHEMA = '${dbname}';`;
    const [res] = await DB.execute(sql);
    chCash.name = name;
    if (res.length) {
      chCash.res = true;
      return true;
    } else {
      chCash.res = false;
      return false;
    }
  } catch (error) {
    console.log("eror in chack db exist function =>", error);
  }
};

class Model {
  constructor(schema, name) {
    this.name = name;
    this.schema = schema;
  }

  async mygrate() {
    try {
      const DB = await DataBase();
      const sql = `CREATE TABLE ${dbname}.${this.name} (
                id INT NOT NULL AUTO_INCREMENT ,
                ${this.schema
                  .map((e) => {
                    return `${e.name} ${e.type} ${
                      e.req ? " NOT NULL" : "NULL"
                    } ${e.defaults ? "DEFAULT '" + e.defaults + "'" : ""}`;
                  })
                  .join(",")},
               
                createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
                updateAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
                PRIMARY KEY (id)) ENGINE = InnoDB;`;

      return DB.execute(sql);
    } catch (error) {
      console.log(`error to mygrate in [${this.name}] =>`, error);
      return error;
    }
  }
  // find all data
  async findAll() {
    try {
      if (!(await chackTable(this.name))) {
        await new Promise(async (resolve) => {
          const resmy = await this.mygrate();
          resolve();
        });
      }

      const DB = await DataBase();
      let sql = `SELECT * FROM ${this.name}`;
      return DB.execute(sql);
    } catch (error) {
      console.log(`error to get all in [${this.name}] =>`, error);
      return error;
    }
  }

  // add data
  async Add(data) {
    try {
      if (!(await chackTable(this.name))) {
        await new Promise(async (resolve) => {
          const resmy = await this.mygrate();
          resolve();
        });
      }

      let keys = Object.keys(data);
      let valus = Object.values(data);
      const DB = await DataBase();
      let sql = `INSERT INTO usertable (id, 
                ${keys.join(",")},
                createdAt, updateAt) VALUES (NULL, "${valus.join('","')}",
                 current_timestamp(), current_timestamp());`;
      //  console.log(sql);
      return DB.execute(sql);
    } catch (error) {
      console.log(
        "new error in when add data function call in model =>",
        error
      );
      return error;
    }
  }
}

module.exports = Model;
