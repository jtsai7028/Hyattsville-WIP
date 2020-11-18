import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('/'));

app.route('/')
  .get((req, res) => {
    console.log('GET request detected');
    res.send("working!!");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
