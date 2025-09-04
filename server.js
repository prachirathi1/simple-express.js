const express=require("express");
const app=express();
const PORT=5000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello, Express is Working");
});
app.get("/abot",(req,res)=>{
    res.json({message:"Hello this is express.js backend"});
});
app.listen(PORT,()=>{
    console.log('Server running on http://localhost:${PORT}');
})