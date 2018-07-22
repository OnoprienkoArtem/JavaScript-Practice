var language = 'JS';

function show() {
    console.log(language);
}

show();

function first() {    
    function second() {
        return console.log(language);
    }
    return second();
}

first();


function grandfather() {
    var name = 'John';
    // likes не доступно здесь

    function parent() {
        // name доступно здесь
        // likes недоступно здесь

        function child() {
            // name доступно здесь
            var likes = 'JS';
        }
    }
}