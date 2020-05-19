import {
  Request,
  Response,
  RequestHandler
} from 'express';
import Ctrl from '../ctrl';

/**
 * Person controller
 * @category Controllers
 */
class PersonCtrl extends Ctrl {
  /**
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Request handler for creating new person
   * @return {RequestHandler}
   */
  create(): RequestHandler {
    return async (req: Request, res: Response): Promise<object> => {
      // Todo: implement create handler
      return res.send(req.body);
    };
  }

  /**
   * Request handler to fetch people
   * @return {RequestHandler}
   */
  fetch(): RequestHandler {
    return async (req: Request, res: Response): Promise<object> => {
      // Todo: implement create handler
      return res.send(req.body);
    };
  }

  /**
   * Request handler to delete person
   * @return {RequestHandler}
   */
  delete(): RequestHandler {
    return async (req: Request, res: Response): Promise<object> => {
      // Todo: implement delete handler
      return res.send(req.body);
    };
  }
}

export default PersonCtrl;
