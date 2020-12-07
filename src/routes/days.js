const router = require("express").Router();
const path = require("path");
const {read} = require('../db')

module.exports = () => {
  router.get("/days", (request, response) => {
      // read the data from the json file
      read(path.resolve(__dirname, `../db/schema/days.json`)).then((days)=>{
        console.log(`days`)
        // send response back
        response.send(days);
      })
  });

  return router;
};
