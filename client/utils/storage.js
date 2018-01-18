const setStorageSync = (key, data) => {
    try {
        wx.setStorageSync(key, data)
    } catch (e) {
        console.log(e)
    }
}



module.exports = {
    setStorageSync
}