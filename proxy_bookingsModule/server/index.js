require("newrelic");
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

// app.get('/abodes/:abode_id/reviews', (req, res) => {

app.get('/abodes/:abode_id/reviews', (req, res) => {
  axios.get(`http://localhost:3002/abodes/${req.params.abode_id}/reviews`)
    .then(response => {
      res.status(200);
      res.send(response.data);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));