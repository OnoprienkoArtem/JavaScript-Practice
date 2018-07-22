var firstFunction = function() {
    console.log('Run firstFunction');
};


function runFunction(param) {
    console.log('Run runFanction');
    param();
};

runFunction(firstFunction);




var seconfFunction = function() {
    return 'Run secondFunction.';
}

function runSecondFunction(param) {
    var first = 'Run runSecondFunction';
    var last = param(); 
    return first + last;
}

console.log(runSecondFunction(seconfFunction));





setTimeout(function() {
    console.log('Anonymec Function.');
}, 2000);



var setTO = function() {
    console.log('Anonymec Function.');
}

setTimeout(setTO, 2000)



// IIFE
(function() {
    console.log('IIFE');
}()); 

//or
(function () {
    console.log('IIFE');
})(); 




