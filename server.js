import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('content'));

app.route('/index')
  .get((req, res) => {
    console.log('GET request detected');
    // res.send("wwwwooooorrrrrkkkkkkssssss"); //test with curl localhost:3000/api
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
