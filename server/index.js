const express = require("express")
const app = express()
const port = 4000
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const path = require("path")

const MONGODB_URL= process.env.MONGO_URI;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    // res.send("Hello World!")
    res.render("index")
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});