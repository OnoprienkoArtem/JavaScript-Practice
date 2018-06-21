//get all name users
function loadUsers(callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== request.DONE) { return; }
        const response = JSON.parse(request.responseText);
        const div = document.querySelector('.demo');
        const ul = document.createElement('ul');
        div.appendChild(ul);
        response.forEach(({ name }) => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
        });
        callback();
    });
    request.send();
};

loadUsers(() => { alert('all ok!!!');});



