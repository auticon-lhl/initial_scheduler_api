const router = require("express").Router();

// import path

// import read function to enable you to read data from a file

module.exports = () => {
  router.get("/appointments", (request, response) => {
    // place code to get all apoointments below

  });

  router.put("/appointments/:id", (request, response) => {
    // place code to get 1 appointment by id below

  });

  router.delete("/appointments/:id", (request, response) => {
    // Place code to delete an appointment below

  });

  return router;
};
