const express = require('express');
const app = express();
const path = require('path');


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,  'views'))


app.use('/static' , express.static(path.join(__dirname , 'public')))


app.get('/' , (req,res) => {
    res.render('home')
})

app.listen(8000 , () => {
    console.log("LISTENING ON PORT 8000")
})

