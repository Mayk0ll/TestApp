import express from 'express';
import morgan from 'morgan';
import createConnection from './config/DB/connectionDB.js';
import routes from './routes/index.js';

const port = process.env.PORT || 1234;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', routes);

app.listen( port, async () => {
    await createConnection();
    console.log(`Server is running on port ${port}`);
});
