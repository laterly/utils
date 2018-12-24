/**
 * 判断是否是json
 * @param str
 * 传入的数据
 */
function isJSON(str) {
    if (typeof str == "string") {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == "object" && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log("error：" + str + "!!!" + e);
            return false;
        }
    }
}