const morgan = require("morgan");
const express = require("express");
const app = express();
const { db } = require('./models')
// const models = require('./models/index')

app.use(express.static(__dirname + "/public"));
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
  res.redirect('hello')
});

const PORT = 3000;

// const integrate = async () => {
//   await Page.sync();
//   await User.sync();

// }

const integrate = async () => {
  await db.sync();

  // models.db.sync({force: true})
  // this is kinda dangerous

}

integrate()

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

db.authenticate().
then(() => {
  console.log('connected to the database');
})
