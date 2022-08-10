/*

Calling each API_NAME:

  *accounts assets customers datapoints devices documents forms invites
  *media messages namespaces orders patients relationships rules
  *templates users workflows

*/

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

app.get("/assets", (req, res) => {
  axios.get("https://api.factoryfour.com/assets/health/status")
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

app.get("/customers", (req, res) => {
  axios.get("https://api.factoryfour.com/customers/health/status")
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

app.get("/datapoints", (req, res) => {
  axios.get("https://api.factoryfour.com/datapoints/health/status")
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

app.get("/devices", (req, res) => {
  axios.get("https://api.factoryfour.com/devices/health/status")
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

app.get("/documents", (req, res) => {
  axios.get("https://api.factoryfour.com/documents/health/status")
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

app.get("/forms", (req, res) => {
  axios.get("https://api.factoryfour.com/forms/health/status")
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

app.get("/media", (req, res) => {
  axios.get("https://api.factoryfour.com/media/health/status")
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

app.get("/messages", (req, res) => {
  axios.get("https://api.factoryfour.com/messages/health/status")
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

app.get("/namespaces", (req, res) => {
  axios.get("https://api.factoryfour.com/namespaces/health/status")
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

app.get("/orders", (req, res) => {
  axios.get("https://api.factoryfour.com/orders/health/status")
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

app.get("/patients", (req, res) => {
  axios.get("https://api.factoryfour.com/patients/health/status")
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

app.get("/relationships", (req, res) => {
  axios.get("https://api.factoryfour.com/relationships/health/status")
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

app.get("/rules", (req, res) => {
  axios.get("https://api.factoryfour.com/rules/health/status")
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

app.get("/templates", (req, res) => {
  axios.get("https://api.factoryfour.com/templates/health/status")
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

app.get("/users", (req, res) => {
  axios.get("https://api.factoryfour.com/users/health/status")
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

app.get("/workflows", (req, res) => {
  axios.get("https://api.factoryfour.com/workflows/health/status")
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
