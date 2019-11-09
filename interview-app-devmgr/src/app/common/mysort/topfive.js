// js sort object array by key -> https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
// javascript trim array -> https://stackoverflow.com/questions/953071/how-to-easily-truncate-an-array-with-javascript/6928247
function mysort(input, key) {
    return input.sort(function (a, b)
    {
        var m = a[key];
        var n = b[key];

        if (m === n)
            return 0;
        else
            return (m > n) ? -1 : 1;
    }
    ).slice(0, 5);
}