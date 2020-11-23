import express from 'express';
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('pages'));

app.route('/index')
  .get((req, res) => {
    console.log('GET request detected');
    res.sendFile(path.join(Hyattsville-WIP, "pages", "index.html"));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
