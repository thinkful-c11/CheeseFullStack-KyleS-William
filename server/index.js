const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {DATABASE_URL} = require('../config');
const {Cheese} = require('./model');

const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.Promise = global.Promise;

const cheeseArray = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue",
    "Cheshire Blue",
    "Devon Blue",
    "Dorset Blue Vinney",
    "Dovedale",
    "Exmoor Blue",
    "Harbourne Blue",
    "Lanark Blue",
    "Lymeswold",
    "Oxford Blue",
    "Shropshire Blue",
    "Stichelton",
    "Stilton",
    "Blue Wensleydale",
    "Yorkshire Blue"
];
// API endpoints go here!
app.get('/api/cheeses',(req,res)=>{
  Cheese
  .find()
  .then(cheeseArray=> res.json(cheeseArray));
});

app.post('/api/cheeses', (req, res)=>{
  if(!req.body.cheese){
    console.error("You must have a cheese to add  if you'd like to add a cheese");
    res.sendStatus(400);
  }
  let cheese = req.body.cheese;
  Cheese
  .create({cheese})
  .then(cheese =>res.status(201).json(cheese));
  // cheeseArray.push(cheese);
  // res.status(201).json(cheeseArray);
});

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(port=3001,databaseUrl=DATABASE_URL) {
  //console.log(databaseUrl);
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl,err=>{
      if(err){
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err=>{
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() =>{
    return new Promise((resolve, reject) => {
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
