/*
A Promise is a proxy for a value not necessarily known when the promise is created. 
It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value,
 the asynchronous method returns a promise to supply the value at some point in the future.
 */
/**
 * Promise Has Three state
 * 1 pending
 * 2 resolved
 * 3 reject
 */

let posts = [
    { title: 'post 1' },
    { title: 'post 2' }
];

const getPosts = () => {
    let output = '';
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
            document.body.innerHTML = output;
        })
    }, 1000);
};

const createPost = (obj) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.push(obj);
            const Error = false;
            if (!Error) {
                resolve();
            } else {
                reject(`Error: Somthing went wrong.`);
            }
        }, 3000);
    })
}
createPost({ title: 'post 3' })
    .then(() => { getPosts() })
    .catch((err) => {
        console.log(err)
    });