// test/merge.test.ts

import { merge } from '../src/merge'; 
import { expect } from 'chai'; 

describe('Merge Function', () => {
    it('should merge and return sorted array', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [9, 7, 6, 4, 2];
        const collection3 = [0, 2, 4, 6];
        const sortedArray = [0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 9];

        const result = merge(collection1, collection2, collection3);

        expect(result).to.eql(sortedArray);
    });
});
