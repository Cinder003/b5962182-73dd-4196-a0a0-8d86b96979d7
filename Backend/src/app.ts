import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import todoRoutes from './routes/todo.routes';
import logger from './utils/logger';

dotenv.config();

const app: Express = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(helmet());

const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10), // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Routes
app.use('/api/todos', todoRoutes);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

// Not found handler
app.use((req: Request, res: Response) => {
  logger.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: 'Not Found' });
});

// Global error handler
app.use((err: Error, req: Request, res: Response) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;