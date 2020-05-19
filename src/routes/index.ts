import {Request, Response, Router} from 'express';
import AppConfig from '../configs/app';

// eslint-disable-next-line new-cap
const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.send(`You've reached api routes of ${AppConfig.appName}`);
});

export default router;
