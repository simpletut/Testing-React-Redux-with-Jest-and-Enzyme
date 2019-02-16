import { types } from './../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {

    it('Should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if receiving type', () => {

        const posts = [{ title: 'Test 1'}, { title: 'Test 2'}, { title: 'Test 3'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);

    });

});