import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('pages'));

app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
  })
  .post((req, res) => {
    console.log('POST request detected');
    console.log('Form data in req.body', req.body);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
