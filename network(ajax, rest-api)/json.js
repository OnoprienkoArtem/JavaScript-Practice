// JSON формат.


// JSON.parse(); --десериализация.
// Метод принимает и второй, необязательный, аргумент– функция, 
// которая может влиять на результат преобразования.

const jsonData = '{"isAvailable":true,"list":[{"name": "All","count":43}]}';
const data = JSON.parse(jsonData, function (key, value) {
    if (key == "isAvailable") {
        return "Data is Available";
    } else {
        return value;
    }
});
console.log(data);




