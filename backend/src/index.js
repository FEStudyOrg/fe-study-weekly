import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import todoRouter from './routes/todoRouter.js';
// import authRouter from './routes/authRouter.js';

const app = express();
const PORT = 5001;

app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
    methods: 'GET,POST,PUT,DELETE, PATCH',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
  })
);

app.use(express.json());
app.use('/todo', todoRouter);
// app.use('/login', authRouter);

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
