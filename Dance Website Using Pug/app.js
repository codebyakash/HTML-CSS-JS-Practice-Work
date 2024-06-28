const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
mongoose.connect('mongodb://127.0.0.1:27017/contactDance');
const port = 8000;

//define moongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const contact = mongoose.model('Kitten', contactSchema);

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

app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })

//     res.status(200).render('contact.pug');
})

//Start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
