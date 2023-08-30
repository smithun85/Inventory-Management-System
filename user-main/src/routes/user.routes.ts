import  express,{ Express } from 'express';
import { login,getProfile,singup } from '../controller/user.controller';
import { verifyToken } from '../common/middelware/auth.middelware';

const route:Express = express();

route.post('/signup',singup);
route.post('/login',login);
route.get('/get-profile',verifyToken,getProfile);

export { route };