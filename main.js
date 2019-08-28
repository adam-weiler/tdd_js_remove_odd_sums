function removeOddSum(arr) {
    arr.forEach((element, index) => {
        // console.log(index)
        // console.log(element.a, element.b)

        // If the sum of elements is odd, removes from array.
        if ((element.a + element.b) % 2 != 0) {
            arr.splice(index, 1);
        }
    })

    return arr;
}


// oldArray = [{a: 5, b: 5},
//             {a: 3, b: 4},
//             {a: 2, b: 0},
//             {a: 2, b: 1}]

// newArray = removeOddSum(oldArray);
// console.log(newArray);  // [{a: 5, b: 5}, {a: 2, b: 0}]
       

module.exports = removeOddSum;