const inputData = [[[1, 2, 3]], 3, [3, 4, 5]];

function flatten(data) {
    data = inputData.flat(2);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < i; j++){
        if (data[j] === data[i]) {
            data.splice(i, 1);
            i--;
        }
    }
    }
    console.log(data);
    return data;
}
flatten();

// Expected result: [1, 2, 3, 4, 5] 