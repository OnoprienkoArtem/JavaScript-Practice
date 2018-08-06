// Set() - объект, который немного похож на массив, он может содержать список значений. 
// Но значения в Set() всегда уникальны.

const mySet = new Set(['a', 'b']);
mySet.add(5);
mySet.add(function foo() {});

console.dir(mySet.size); // 4

console.dir(mySet.has('a')); // true
console.dir(mySet.has(5)); // true

// можно перебрать значения
mySet.forEach(function (index) {
console.log(index);
}); 

mySet.delete('a');  // можно удалить значение
mySet.clear(); // можно удалить все значения