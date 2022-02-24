const express = require('express')
const path = require('path')
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.use(express.static(path.join(__dirname,'../public')));

app.listen(port, () => console.log(`Port running on ${port}`));


// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'b0421d6a2c2743e7ab01c1b19ce0cf9f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('monitoring-demo')