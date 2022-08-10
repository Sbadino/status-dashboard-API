const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');
const serverless = require('serverless-http');

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000.");
})

app.use(cors());

app.get("/accounts", (req, res) => {
    axios.get("https://api.factoryfour.com/accounts/health/status")
    .then((fetchRes) => {
      res.json(fetchRes.data);
    })
    .catch((err) => {
      res.json({ 
        success: false,
        message: err.message,
      });
    })
})

app.get("/invites", (req, res) => {
  axios.get("https://api.factoryfour.com/invites/health/status")
  .then((fetchRes) => {
    res.json(fetchRes.data);
  })
  .catch((err) => {
    res.json({ 
      success: false,
      message: err.message,
    });
  })
})

module.exports.handler = serverless(app);
