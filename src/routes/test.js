const router = require("express").Router();

// Define a function that returns the router
// based on the crterion of route path requested

module.exports = () => {
  // This is a test route. it returns the string 
  // 'it works really well :) ' when someone visits http://localhost:8080/api/test 
  router.get("/test", (request, response) => {
    response.json(`it works really well :)`);
  });

  return router;
};
