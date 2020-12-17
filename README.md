# Interview Scheduler API

## Setup

:point_right:&nbsp;&nbsp; Run the following command
```
 run npm init
```

This app relies on the following dependencies

- express
- body-parser
- fs

:point_right:&nbsp;&nbsp; Run the following command to install both at the same time
```
    npm i express body-parser fs
```

:point_right:&nbsp;&nbsp; Add the following start script in your package.json file.

```JSON
  "scripts": {
    "start": "node ./src/index.js"
  },
```

You can re-install dependencies with `npm install`. No need to run this step since you installed dependencies seperately above.

## DB

The database is a JSON file with a list of all the data that may be requested from the endpoints


## Run The Server

Running the server normally
```sh
npm start
```

## Api

### Test

`GET /api/test`

Response

```String
'it works really well :)'
```

### Days

`GET /api/days`

Response

```json
[
  {
    "id": 1,
    "name": "Monday",
    "appointments": [1, 2],
    "interviewers": [1, 2],
    "spots": 0
  }
]
```

### Appointments

`GET /api/appointments`

Response:

```json
{
  "1": {
    "id": 1,
    "time": "12pm",
    "interview": {
      "student": "Lydia Miller-Jones",
      "interviewer": 1
    }
  },
  "2": {
    "id": 2,
    "time": "1pm",
    "interview": {
      "student": "Archie Cohen",
      "interviewer": 2
    }
  }
}
```

`PUT /api/appointments/:id`

Body:

```json
{
  "interview": {
    "student": String,
    "interviewer": Number
  }
}
```

`DELETE /api/appointments/:id`

### Interviewers

`GET /api/interviewers`

Response:

```json
{
  "1": {
    "id": 1,
    "name": "Sylvia Palmer",
    "avatar": "https://i.imgur.com/LpaY82x.png"
  },
  "2": {
    "id": 2,
    "name": "Tori Malcolm",
    "avatar": "https://i.imgur.com/Nmx0Qxo.png"
  }
}
```
