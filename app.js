// const http = require('http');
// const port = 3000

// const server = http.createServer(function(req, res) {
//     Response.write('Hello Node');
//     res.end();
// })

// server.listen(port, function(error) {
//     if(error) {
//         console.log('Not working.', error);
//     } else {
//         console.log('Server running on port ' + port);
//     }
// })
const fetch = require("node-fetch");
const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000.");
})

app.use(cors());

app.get("/", (req, res) => {
    
    axios.get("https://api.factoryfour.com/API_NAME/health/status")
    .then((fetchRes) => {
      res.json(fetchRes.data);
    })
    .catch((err) => {
      console.log(err);
    })
})
