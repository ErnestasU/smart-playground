const MongoClient = require('mongodb').MongoClient;

class Mongo {

  constructor(){
    this.url = null;
    this.connection = null;
    this.db = null;
  }

  connect(url, database){
    const self = this;
    this.url = url;
    if(this.connection){
      this.close();
    }
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
      if (err) throw err;

      self.db = db.db(database);

      console.log(`Connected to database: ${database}`)
    });
  }

  close(){
    if(this.connection){
      this.connection.close();
      console.log("Closed mongodb connection");
    }
  }
}

module.exports = new Mongo();