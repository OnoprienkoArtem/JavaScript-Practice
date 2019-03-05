// — синхронное и асинхронное программирование
// — Promise
// — fetch
// — Async/await

// синхронное - код выполняется построчно, пока предыдущая операция не будет закончена, следующая не будет запущена.
// асинхронное - означает, что выполнение части кода можно переместить из основного потока выполнения в так называемую очередь выполнения.


// — Promise - объект, который используется для выполнения асинхронных операций и возвращает результат в виде успешного 
//  выполнения или ошибки.

const enoughSalary = true;

const buyNewPhone = new Promise(
    function(resolve, reject) {
        if (enoughSalary) {
            const phone = {
                brand: 'Samsung',
                model: 'Galaxy S9',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('Not enough money.');
            reject(reason);
        }
    }
);

// Последующую обработку данных можно совершить в методах then или catch

buyNewPhone
    .then(function(data) {
        console.log(`I've bought ${data.color} ${data.brand} ${data.model}`);
    })
    .catch(function(error) {
        console.log(error);
    });




// работа с backеnd

const url = 'https://jsonplaceholder.typicode.com/posts?userId=1';
const makeRequest = new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            resolve(xhr.response);
        } else {
            reject(error);
        }
    }
    xhr.send();
});


// fetch
// глобальный метод fetch позволяет, как и XMLHttpRequest, отправлять ясинхронный запрос по сети. Преимуществом fetch является
// упрощенный синтаксис, он возвращает Promise, позволяет легче конфигурировать запросы.








