const fs = require("fs");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

function update (id, interview, appointments) {
  let app_id = Object.keys(appointments).includes(id)
  if (app_id){
    appointments[id] = {...appointments[id],interview}
  }
  return appointments
}

function write (file, id, interview){
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
      let appointments = JSON.parse(data); // parse data read to object
      let new_appointments = update(id, interview, appointments) // update the data
      json = JSON.stringify(new_appointments); //convert it back to json
      fs.writeFile(file, json, 'utf8', (err, res)=>{
        if (err) return reject(error);
        resolve(new_appointments) 
      }); // write it back 
    }});
  })
}

module.exports = {read, write};
