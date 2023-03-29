const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient;

const url='mongodb+srv://amitdubeyhbtu:droame%402802@cluster0.olcq7ro.mongodb.net/?retryWrites=true&w=majority';


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000,()=>{
    console.log("server is running");
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  })


 

  MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('droame')
    const dbcollection = db.collection('droame');
   
    app.post('/details', (req, res) => {
        dbcollection.insertOne(req.body)
        res.redirect('/')
        .then(result => {
          console.log(result)

        })
        .catch(error => console.error(error))
      })
    
      
      
    
  })
  .catch(error => console.error(error));

  

  
  
  
  

