import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Olá dev' });
});

app.listen(3000, () => {
  console.log('Server is running ✨');
});
