const express = require ('express')
const app = express();
const mongoose = require('mongoose')
const port = 5000;



app.use(express.json())

mongoose.connect("mongodb+srv://malek1984:malek1984@cluster0.tcvf3xb.mongodb.net/personapp?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>console.log("DB connected")).catch((err)=>console.log(err));

app.use("/",require('./Routs/createPerson'))


app.listen(port, (err) => {
    err ? console.log("error:", err) : console.log("server is running in port:", port);
});
