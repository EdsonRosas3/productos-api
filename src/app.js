import express from 'express';
import morgan from 'morgan'
import productsRouter from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import {createRoles} from './libs/initialSetup'
import userRoutes from './routes/user.routes'

const app = express();
createRoles()
app.use(morgan("dev"));
app.use(express.json());


app.use('/api/products',productsRouter);
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);

export default app;