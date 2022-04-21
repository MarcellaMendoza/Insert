const express = require('express')
const app = express()
const port = 3000
const {MongoClient} = require('mongodb')
const url = "mongodb+srv://mmendoza5:SebasTian12@cluster0.wjicg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.post('/users', (req, res) => {


  async function insertDoc() {
    await client.connect()
    const collection = client.db('test_db').collection('users')
    await collection.insertOne(req.body)
    await client.close()
  }
  
  insertDoc()
  res.redirect('/')
  
})


app.listen(port)