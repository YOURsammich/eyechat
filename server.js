import express from 'express';
const app = express();

app.use(express.static('public'));

app.listen(80, () => {
  console.log('listening on 80');
})