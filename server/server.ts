import express, { Request, Response } from 'express';
import apiRoutes from './routes/apiRoutes';
var app = express();

app.use(express.json());
// API Routes
app.get('/', (req: Request, res: Response) => {
  // what is the purpose of giving 30001 port here ? if it redirect it will 404 exception
  res.redirect('http://localhost:3000/api/data');
});
app.use('/api', apiRoutes);

// Start the server

const PORT: number = parseInt(process.env.DEV_PORT as string, 10) || 3001;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
