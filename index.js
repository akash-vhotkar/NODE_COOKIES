const express  = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

const PORT  =  9000;

app.get('/login', (req, res)=>{
    res.send("here is the login page fo the dashboard ")

})
app.get('/username', (req, res)=>{
    let cookies  = req.cookies;
    return res.send(cookies.username);
})


app.get("/", (req, res)=>{
    res.cookie("username", "akashvhotkarserver", { maxAge : 2* 60*1000, secure : true, sameSite : false, httpOnly : true })
    res.send("hello from the server is running on ");
})


app.listen(PORT  , ()=>{
    console.log("the server is running on the port of "+ PORT);
})