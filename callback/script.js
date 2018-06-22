//get all name users
// function loadUsers(callback) {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'https://jsonplaceholder.typicode.com/users');
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState !== request.DONE) { return; }
//         const response = JSON.parse(request.responseText);
//         const div = document.querySelector('.demo');
//         const ul = document.createElement('ul');
//         div.appendChild(ul);
//         response.forEach(({ name }) => {
//             const li = document.createElement('li');
//             li.textContent = name;
//             ul.appendChild(li);
//         });
//         callback();
//     });
//     request.send();
// };
//
// loadUsers(() => { alert('all ok!!!');});


//get posts first user
function getPostsByFirstUser(callback) {
    const usersRequest = new XMLHttpRequest();
    usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
    usersRequest.addEventListener('readystatechange', () => {
        if (usersRequest.readyState !== usersRequest.DONE) {
            return;
        }
        if (usersRequest.status !== 200) {
            return callback('error!!!');
        }
        const [{ id, name }] = JSON.parse(usersRequest.responseText);
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        const postsRequst = new XMLHttpRequest();
        postsRequst.open('GET', url);
        postsRequst.addEventListener('readystatechange', () => {
            if (postsRequst.readyState !== postsRequst.DONE) {
                return;
            }
            if (postsRequst.status !== 200) {
                return callback('error!!!');
            }
            const posts = JSON.parse(postsRequst.responseText);
            const div = document.querySelector('.demo');
            const header = document.createElement('h1');
            header.textContent = name;
            div.appendChild(header);
            const ul = document.createElement('ul');
            posts.forEach(({ title }) => {
                const li = document.createElement('li');
                li.textContent = title;
                ul.appendChild(li);
            });
            div.appendChild(ul);
            callback();
        });
        postsRequst.send();
    });
    usersRequest.send();
};

getPostsByFirstUser(error => {
    if (error) {
        alert('error!!!');
    };
});
