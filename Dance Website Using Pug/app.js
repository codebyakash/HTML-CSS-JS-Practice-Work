const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');  //Set the template enginea as PushManager
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})

//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
