const express = require('express');
const moment = require('moment');
const time = moment().format('MMMM Do YYYY, h:mm:ss a');
const app = express();
const clock = (req,res,next)=>{
    console.log(time);
    next();
}
const port = 3000;
app.use(clock);
app.get('/',(req,res)=>{
    res.send(`The time is ${time}`)
})
app.listen(port,()=>{
    console.log(`App listening at http://lacalhost:${port}\nThe time is ${time}`)
})