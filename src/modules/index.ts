import {Person as PersonModel} from '../models';
import Person from './person';

/**
 * @category Modules
 * @param {person} Instance of Person module
 */
export const person = new Person({
  model: PersonModel
});
