var firstFunction = function() {
    console.log('Run firstFunction');
};

function runFunction(param) {
    console.log('Run runFanction');
    param();
};

runFunction(firstFunction);