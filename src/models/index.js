// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Todo, DatoSensores, Content, Motoruser } = initSchema(schema);

export { Todo, DatoSensores, Content, Motoruser };
