const express =require("express");
const studentRoutes = require('./Src/Student/routes');
const app=express();
const port = 3003;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hellow world");
})
app.use("/api/v1/students",studentRoutes);

app.listen(port,()=> console.log(`i am server and lestening here on ${port}`));