const PORT = process.env.PORT || 8001;
// import the app you define in the application file
// this step can be ignored if we had defined the app inside this index file

const app = require("./application")();


// the Express app has a method called listen, that takes in a PORT number and a callback
// We can start our app by invoking this method

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT} in development mode.`);
// });
