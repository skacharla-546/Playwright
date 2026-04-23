
import { test, expect } from '@playwright/test';

test('Closures in TypeScript', async ({ page }) => {
    const facebookPost = facebookPostLikes();
    facebookPost.addLike();
    facebookPost.addLike();
    console.log(facebookPost.getLikes()); // Output: 2
    facebookPost.removeLike();
    console.log(facebookPost.getLikes()); // Output: 1
});

function facebookPostLikes() {
    let likes = 0;
    return {
        addLike: () => {
            likes++;
        },
        removeLike: () => {
            likes--;
        },
        getLikes: () => {
            return likes;
        }
    };
}

// const facebookPost = facebookPostLikes();
// facebookPost.addLike();
// facebookPost.addLike();
// console.log(facebookPost.getLikes()); // Output: 2
// facebookPost.removeLike();
// console.log(facebookPost.getLikes()); // Output: 1

