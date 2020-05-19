import {Router as expressRouter} from 'express';
import {PersonCtrl} from '../controllers';

/**
 * @category Routers
 */
const router: expressRouter = expressRouter();

/**
 * Create new person route
 */
router.post('/new', PersonCtrl.create());

/**
 * Fetch all people
 */
router.get('/fetch', PersonCtrl.fetch());

/**
 * Route to delete all people
 */
router.delete('/', PersonCtrl.delete());
