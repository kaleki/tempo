const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const tempoRoutes = express.Router();
const PORT = 4000;

let Wish = require('./wish');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})
//home
tempoRoutes.route('/').get(function(req, res) {
  Wish.find(function(err, mywish) {
      if (err) {
          console.log(err);
      } else {
          res.json(mywish);
      }
  });
});
//my wish list 
tempoRoutes.route("/mywish/:id").get(function(req, res) {
  let id = req.params.id;
  Wish.findById(id, function(err, wish) {
      res.json(wish);
  });
})

app.use("/mywish", tempoRoutes);



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});