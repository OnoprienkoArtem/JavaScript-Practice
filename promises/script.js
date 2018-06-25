function xhr(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== request.DONE) {
                return;
            }
            if (request.status !== 200) {
                return reject('error!!!');
            }
            resolve(JSON.parse(request.responseText));
        });
        request.send();
    });
}





