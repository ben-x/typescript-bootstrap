import {Request, Response, Router as expressRouter} from 'express';
import AppConfig from '../configs/app';
import PersonRouter from './person';

const router: expressRouter = expressRouter();

router.get('/', (req: Request, res: Response): void => {
  res.send(`You've reached api routes of ${AppConfig.appName}`);
});

router.use('/person', PersonRouter);

export default router;
