/*
A JavaScript Callback Function is a function that is passed as a parameter to another JavaScript function,
 and the callback function is run inside of the function it was passed into.
  JavaScript Callback Functions can be used synchronously or asynchronously
 */


const post = [
    { title: "Post 1" },
    { title: "Post 2" }
]

function getPosts() {
    let output = '';
    setTimeout(() => {
        post.forEach(post => {
            output += `<li>${post.title}</li>`
            document.body.innerHTML = output;
        })
    }, 1000);
}
// getPosts();
function creatPosts(obj, callback) {
    setTimeout(() => {
        post.push(obj);
        callback();
    }, 2000);
}

creatPosts({ title: "Post 3" }, getPosts);