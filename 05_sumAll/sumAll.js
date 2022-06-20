const sumAll = function() {
    if(arguments.length != 2){
        return 'ERROR';
    }
    if(typeof arguments[0] != 'number' || typeof arguments[1] != 'number'){
        return 'ERROR';
    }
    if(arguments[0] < 0 || arguments[1] < 0){
        return 'ERROR';
    }
    return (arguments[0] + arguments[1]) * (Math.abs(arguments[0] - arguments[1]) + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
