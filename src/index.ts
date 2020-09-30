
import express from 'express';
import "reflect-metadata";
import morgan from 'morgan';
import routes from './routes/products.routes';
import mysql from 'mysql';
import {createConnection}  from 'typeorm';

const app = express();
createConnection();


app.set('port', 4000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(routes);

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});