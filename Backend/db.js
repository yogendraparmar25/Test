const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
   host: 'local host',
   user: 'root',
   password: '',
   database: 'testdb',
});

db.connect((err) => {
   if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
   }
   console.log('Connected to MySQL');
});

app.post('/signup', (req, res) => {
   const { username, password } = req.body;

   // Check if the username already exists
   db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
      if (error) {
         console.error('Error:', error);
         res.status(500).json({ message: 'Server error' });
      } else if (results.length > 0) {
         res.status(409).json({ message: 'Username already exists' });
      } else {
         // Insert the new user into the database
         db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
            if (err) {
               console.error('Error:', err);
               res.status(500).json({ message: 'Failed to register user' });
            } else {
               res.status(201).json({ message: 'User registered successfully' });
            }
         });
      }
   });
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
