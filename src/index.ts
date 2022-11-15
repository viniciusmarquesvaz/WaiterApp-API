import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017')
  .then(()=> {
    const app = express();
    const port = 3002;
    app.listen(port, () => {
      console.log(` Server is running at http://localhost:${port}`);
    });

    console.log('conectado ao mongo');
  }).catch(()=> console.log('erro'));

