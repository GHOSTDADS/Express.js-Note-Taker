const notes = require('express').Router();

const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// This API route is a GET Route for retrieving all the note
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// This API route is a POST Route for a new note
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
});
  
module.exports = notes;
  
