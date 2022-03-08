import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import { UserProfile } from './userProfile';

const app = express();

app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.get('', (req, res, next) => {
  console.log(req);
  return res.send(200).json({code: 200, message: 'success'});
});

let user = new UserProfile('John', 'Smith');
user.getName();

app.listen(3000, () => {
  console.log('Server is listening at port 3000');
});


for(i=0; i<10; i++) {
  const random = Math.random() *100;
  setTimeout(() => {
    console.log(i);
  }, random);
}