//logs.js
var util = require('../../utils/util.js')
Page( {
    data: {
        logs: []
    },

    onLoad: function () {
        // this.fakeData();
        this.setData({
        logs: (wx.getStorageSync('logs') || []).map(function (item) {
                return item.who + ": " + util.formatTime(new Date(item.date)) + ". " + item.msg
            })
        })
        //console.log(this.data)
    },

    fakeData: function () {
        try {
            wx.setStorageSync('logs', [
                {
                    date: 1500000000000,
                    who: 'AA',
                    msg: 'Hello!'
                },
                {
                    date: 1510000000000,
                    who: 'BB',
                    msg: 'Nice to meet you!'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
                {
                    date: 1520000000000,
                    who: 'CC',
                    msg: 'See you later.'
                },
            ])
        } catch (e) {
            console.log(e)
        }
    }
} )
