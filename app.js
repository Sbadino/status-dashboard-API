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

// ACCOUNTS

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

// ASSETS

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

// CUSTOMERS

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

// DATAPOINTS

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

// DEVICES

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

// DOCUMENTS

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

// FORMS

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

// INVITES

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

// MEDIA

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

// MESSAGES

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

// NAMESPACES

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

// ORDERS

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

// PATIENTS

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

// RELATIONSHIPS

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

// RULES

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

// TEMPLATES

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

// USERS

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

// WORKFLOWS

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
