import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('pages'));

app.route('/index')
  .get((req, res) => {
    console.log('GET request detected');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
