const express = require('express')
const app = express()
const port = env.port | 3000
const os = require("os");
const bookRouter = require('./routes/bookRouter');

app.use("/api", bookRouter)

app.listen(port, () => console.log(`Example app listening on port port!`))