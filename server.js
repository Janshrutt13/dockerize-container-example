const express = require('express');
const pool = require('./db');
const PORT = 8000;

const app = express();

//Middleware
app.use(express.json());

//routes
app.get('/', async(req,res) => {
    try{
      const data = await pool.query('SELECT * FROM schools');
      res.sendStatus(200).send(data.rows);
    }catch(err){
       res.sendStatus(500);
       console.log(err);
    }
});

app.post('/', async(req,res) => {
    const { name, location} = req.body;
    try{
      await pool.query('INSERT INTO TABLE schools (name, address) VALUES ($1,$2)' [name , location])
      res.sendStatus(200).send({message : 'Successfully added child'})
    }catch(err){
       res.sendStatus(500)
       console.log(500)
    }
});

app.get('/setup' , async(req,res) => {
    try{
      await pool.query('CREATE TABLE schools( id INT PRIMARY KEY, address VARCHAR(100))')
      res.sendStatus(200).send({ message : 'Successfully created table'});
    }catch(err){
       res.sendStatus(500);
       console.log(err);
    }
})



app.listen(PORT, () => console.log('Server has started on ${PORT}'));