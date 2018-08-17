function extend(parent) {
    var i,
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
    return child;
}


var dad = {
    id: 1,
    name: 'Art',
    hobies: {
        game: 'mk',
        movie: 'marvel'
    },
    getName: function() {
        return this.name;
    }
}
console.log(dad.getName());

var kid = extend(dad);
console.log(kid);

kid.id = 7;
kid.name = 'Tom';

console.log(kid.getName());  
console.log(kid); 
console.log(dad);


dad.hobies.game = 'shoot';
dad.id = 555;

console.log(kid);
console.log(dad);
