/*
判断各种设备
*/
export default {
    isWx: () => {
        let ua = window.navigator.userAgent.toLowerCase()
        return (ua.match(/MicroMessenger/i) == 'micromessenger') ? true : false
    },
    
}