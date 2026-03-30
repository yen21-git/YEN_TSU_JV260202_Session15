let result = applyFormula([1, 2, 3, 4], function (el) {
    el = el + 10;
    return el;
}
);
let result2 = applyFormula([-1, -2, -3, -4], function (el) {
    el = el ** 2;
    return el;
});
function applyFormula(arr, fn) {
    let result = [];
    for (let index in arr) {
        let el = fn(arr[index]);
        result.push(el);
    }
    return result;
}

