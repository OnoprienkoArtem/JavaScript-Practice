var status = function(response) {
    if(response.status !== 200) {
        return Promise.reject(new Error(response.statusText));
    }
    return Promise.resolve(response);
}

var json = function(response) {
    return response.json();
}

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'post'
})
    .then(status)
    .then(json)
    .then(function(data) {
        console.log('data', data)
    })
    .catch(function(error) {
        console.log('error', error)
    })
