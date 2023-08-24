import express from 'express';
import morgan from 'morgan';
import router from './routers/router.js';
import dbConnection from './configs/dbconfigs.js';
import dotenv from 'dotenv';

const app = express();
dbConnection();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/', router);

app.listen(9091, () => {
  console.log('Server Started on port http://localhost:9091');
});
