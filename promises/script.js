// function xhr(url) {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.open('GET', url);
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState !== request.DONE) {
//                 return;
//             }
//             if (request.status !== 200) {
//                 return reject('error!!!');
//             }
//             resolve(JSON.parse(request.responseText));
//         });
//         request.send();
//     });
// }





function getPostByFirstUser(cb) {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(([{ id }]) =>
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
    )
    .then(r => r.json())
    .then(posts => {
        const div = document.querySelector('.demo');
        const header = document.createElement('h1');
        header.textContent = 'Posts';
        div.appendChild(header);
        const ul = document.createElement('ul');
        posts.forEach(({ title }) => {
            const li = document.createElement('li');
            li.textContent = title;
            ul.appendChild(li);
        });
        div.appendChild(ul);
    });
}

getPostByFirstUser().then(
    () => console.log('all OK!'),
    () => alert('все плохо')
);
