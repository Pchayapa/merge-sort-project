// src/merge.ts

export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = collection2.length - 1, k = 0;

    while (i < collection1.length && j >= 0 && k < collection3.length) {
        if (collection1[i] <= collection3[k]) {
            result.push(collection1[i]);
            i++;
        } else {
            result.push(collection3[k]);
            k++;
        }
    }

    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }

    while (k < collection3.length) {
        result.push(collection3[k]);
        k++;
    }

    while (j >= 0) {
        result.push(collection2[j]);
        j--;
    }

    return result;
}
