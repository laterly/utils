/*
判断各种设备
*/
 let ua = window.navigator.userAgent.toLowerCase();
export default {
    isWechat: () => {
        //微信内置浏览器
        return (ua.match(/MicroMessenger/i) == 'micromessenger') ? true : false
    },
    isAndroid:()=>{
        //安卓终端
        return ua.indexOf('android') > -1 || ua.indexOf('adr') > -1
    },
    isIos: () => {
        //ios终端
        return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    },
    isIphone:()=>{
        //iphone浏览器
        return ua.indexOf('iphone') > -1;
    },
    isMobile:()=>{
        //是否为移动终端
        return !!ua.match(/applewebkit.*mobile.*/);
    }

}