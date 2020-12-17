// import the express middleware
const express = require("express");

// import the rest of the libraries you want to use
const bodyparser = require("body-parser");

// Define your application as one that uses the express middleware
const app = express();

// import test.js file from the routes folder by uncommenting the line below
// const test = require("./routes/test");


// import the days route file below in the same way the test route file was imported above


// import any other route files you defined in the routes folder


module.exports = function application() {
  // tell your app to use bodyparser 
  app.use(bodyparser.json());

  // tell your app to use the test route file when someone requests a resource from '/api'
  // uncomment the line below
  // app.use("/api", test());

  // tell your app to use the rest of the route file you defined
 
  // days

  // appointments

  // interviewers

  return app;
};
