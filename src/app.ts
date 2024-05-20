import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './module/order/order.route';

// parser
app.use(express.json());
app.use(cors());


app.use('/api', router);


app.get('/', (req: Request, res: Response) => {
  const a = 'Hello World!';
  res.send(a);
});


export default app;
