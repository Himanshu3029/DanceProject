const express=require('express')
const path=require('path')
const bodyparser=require('body-parser')
// const fs=require('fs')
const app=express()
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DanceProject')
const port = 80;

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    contact: String,
    password: String
  });
  
const Contact = mongoose.model('contacts', ContactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
// mongoose.connect(db,{
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }).then(()=>{
//          console.log("connected")
//         }).catch(()=>{
//             console.log("connected")
//         });

app.post('/contact', (req, res)=>{
    var mydata=new Contact(req.body);
    mydata.save().then(()=>{
     res.render('contact.pug')
    }).catch(()=>{
        res.status.send("not transfer")
    })

    // res.status(200).render('contact.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

