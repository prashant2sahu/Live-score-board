const express=require("express");
const app=express();
const cors=require("cors");

require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const auth=require('./Routes/Routess');
app.use("/api/v1",auth);

const dbconnect=require("./config/dbconnect");
dbconnect();

// hosting purpose only 
const path = require("path");
app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "front", "build")));
res.sendFile(path.resolve(__dirname, "front", "build", "index.html"));
});
app.listen(4000,(req,res)=>{
    console.log(`App running on PORT ${PORT}`)
});

app.get("/",(req,res)=>{
    console.log("welcome guys in our web");
})