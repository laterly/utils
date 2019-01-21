/**
 * 可以用于把数组分成几份。
 * @param arr
 * 要被分割的数组
 * @param len
 * 要将数组分成的份数
 */
function splitArrary(arr, len) {
    var arrLen = arr.length;
    var newArr = [];
    for (var i = 0; i < arrLen; i += len) {
        newArr.push(arr.slice(i, i + len));
    }
    return newArr;
}
export default {
    splitArrary: splitArrary
};