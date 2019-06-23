// const express = require("express");
// const app = express();
// const port = "9000";
// const host = "0.0.0.0"

// app.get("/",(req,res) =>{
//     res.send("Thang Cong Tu");
// })


// app.listen(port, () =>{
//     console.log("server running port 9000")
// })


const express = require('express');

// Constants
const PORT = 9000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world te le hot me \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);