var util = require('./util.js')
var storage = require('./storage.js')

const log = (who, msg) => {
    var logString = who +
            util.formatTime(new Date) +
            msg;
    storage.setStorageSync(who, logString)
}



module.exports = {

}