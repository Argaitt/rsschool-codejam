
function make(){

    function isFunction(functionToCheck) {
        return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
    }

    function makeAdd(x){
        return function(y){
            return x + y;
        }
    }

    let i = 0, arr = [], len = arguments.length, sum = 0;
    while((i < len) && !(isFunction(arguments[i]))){
        arr[i] = arguments[i];
        i++;
    }

    for(i = 0; i < arr.length; i++){
        let add = makeAdd(arr[i]);
        sum = add(sum);
    }
    return sum;

};
