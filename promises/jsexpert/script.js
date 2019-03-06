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


    // GET
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });





fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response) => {
        console.log(response.headers.get('Content-Type'));
        console.log(response.status);
        console.log(response.url);
    });




const options = {
    method: 'post',
    headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' 
    },
    body: 'title=foo&body=bar&user=1'
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });




// Async/await

// конструкция async/await позволяет реализовать асинхронные функции.

// Ключевое слово async, написанное перед функцией, определяет, что функция является асинхронной
// (такая функция возвращает Promise) и позволяет использовать внутри нее оператор await, который
// приостанавливает выполнение функции, на время получения результата.

// Приостановленная с помощью await функция, так же должна возвращать Promise.


const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['bread', 'water', 'oil'])
        }, 2000)
    });
};

const buy = (products) => {
    const msg = `You bought: ${products.length} products.`;
    return Promise.resolve(msg);
};

async function order() {
    let products = await getProducts();
    let orderMessage = await buy(products);

    return orderMessage;
}

order()
    .then((response) => {
        console.log(response);
    });
// You bought: 3 products.
