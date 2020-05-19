import {
  createConnection,
  Connection,
  Model} from 'mongoose';

import MongoConfig from '../configs/mongo';
import personFactory, {PersonInterface} from './person';

const conn: Connection = createConnection(MongoConfig.uri, MongoConfig.options);

export const Person: Model<PersonInterface> = personFactory(conn);

conn.once('open', (): void => console.log('db connection open'));
