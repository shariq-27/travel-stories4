import {createSchema} from 'sanity';
// import {schemaTypes} from 'sanity';
import post from './post';
import user from './user';
import comment from './comment';
import postedBy from './postedBy';

export const schemaTypes = [
        post, user, comment, postedBy
    ]

