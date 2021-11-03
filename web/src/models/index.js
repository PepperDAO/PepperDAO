// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Promotion, UserPost, ClubPost, Club, User } = initSchema(schema);

export {
  Promotion,
  UserPost,
  ClubPost,
  Club,
  User
};