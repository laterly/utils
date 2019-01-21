/**
 * 可以截取url的参数
 * @param name
 * 要被截取的参数名字
 */
function get(name) {
    let queryObj = {};
    let url = location.search; //获取url中"?"符后的字串
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            queryObj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return queryObj[name]
}
module.exports = {
    get: get
};
