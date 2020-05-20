import {Router as expressRouter} from 'express';
import {personCtrl} from '../controllers';

/**
 * @category Routers
 */
const router: expressRouter = expressRouter();

/**
 * Create new person route
 */
router.post('/new', personCtrl.create());

/**
 * Fetch all people
 */
router.get('/fetch', personCtrl.fetch());

/**
 * Route to delete all people
 */
router.delete('/', personCtrl.delete());

export default router;
