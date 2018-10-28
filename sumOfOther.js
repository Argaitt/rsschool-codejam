function SumOfOther(arr){
    let rezArr = [];
    for (let i = 0, len = arr.length; i < len; i++){
        let sum = 0;
        for (let j = 0, len = arr.length; j < len; j++){
            if (i != j) sum += arr[j];
        }
        rezArr.push(sum);
    }
    return rezArr;
}

