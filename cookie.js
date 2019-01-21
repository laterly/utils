let cookieObj;

function updateCookie() {
    let arr = document.cookie.split(';');
    cookieObj = {};
    for (let item of arr) {
        let inner = item.split('=');
        if (inner.length >= 2) {
            cookieObj[inner[0].replace(/(^\s*)|(\s*$)/g, "")] = inner[1].replace(/(^\s*)|(\s*$)/g, "");
        }
    }
    //console.log('123',cookieObj);
}

/**
 * 从cookies中获取键值对
 * @param key
 * 键
 * @returns {*}
 * 值
 */
function get(key) {
    if (!cookieObj)
        updateCookie();
    return cookieObj[key];
}
export default {
    get: get,
    update: updateCookie
}