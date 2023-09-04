import  express,{ Express } from 'express';
import { route as userRoutes } from './user.routes';

const route:Express = express();

route.use("/",userRoutes);

export { route };