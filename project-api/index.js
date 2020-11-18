const express = require('express');
const app = express()
const port = 8000;

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
});

//handler endpoint /
app.get("/", (req,res) => {
    res.send("Welcome");
});