//index.js
var qcloud      = require('../../vendor/wafer2-client-sdk/index')
var config      = require('../../config')
var util        = require('../../utils/util.js')
var WxSearch    = require('../../wxSearch/wxSearch.js')
var app         = getApp();

Page( {
    data: {
        bannerData: {
            itemImgs: [
                {   id: 111,
                    url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'},
                {   id: 222,
                    url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'},
                {   id: 333,
                    url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'}
            ],
            indicatorDots: true,
            indicatorColor: "rgba(255, 255, 255, .5)",
            indicatorActiveColor: "#FFFFFF",
            autoplay: true,
            interval: 5000,
            duration: 500,
            circular: true
        }
    },

    // 页面初始化
    onLoad: function () {
        var that = this

        // 搜索栏初始化，初始化的时候渲染wxSearchdata
        WxSearch.init(that, 34, [
                '战争机器4',
                '光环5：守护者',
                '舞力全开2018',
                'ARCADE GAME SERIES: PAC-MAN',
                '光之子',
                '蜡烛人',
                '使命召唤：二战',
                '我的世界 故事模式 第二季',
                '我的世界 故事模式 第一章',
                '光环：士官长合集'
            ]
        );

        // 搜索栏初始化，设置联想词汇
        WxSearch.initMindKeys( [
                '战争机器4',
                '光环5：守护者',
                '舞力全开2018',
                'ARCADE GAME SERIES: PAC-MAN',
                '光之子',
                '蜡烛人',
                '使命召唤：二战',
                '我的世界 故事模式 第二季',
                '我的世界 故事模式 第一章',
                '光环：士官长合集'
            ]
        );

        // 记录日志，函数运行成功
        console.log("page/index/index:",
            util.formatTime(new Date),
            "Function * onLoad * Success.");
    },

    wxSearchFn: function (e) {
        var that = this
        WxSearch.wxSearchAddHisKey(that);
    },

    wxSearchInput: function (e) {
        var that = this
        WxSearch.wxSearchInput(e, that);
        console.log(that.data.wxSearchData);
    },

    wxSerchFocus: function (e) {
        var that = this
        WxSearch.wxSearchFocus(e, that);
    },

    wxSearchBlur: function (e) {
        var that = this
        WxSearch.wxSearchBlur(e, that);
    },

    wxSearchKeyTap: function (e) {
        var that = this
        WxSearch.wxSearchKeyTap(e, that);
    },

    wxSearchDeleteKey: function (e) {
        var that = this
        WxSearch.wxSearchDeleteKey(e, that);
    },

    wxSearchDeleteAll: function (e) {
        var that = this;
        WxSearch.wxSearchDeleteAll(that);
    },

    wxSearchTap: function (e) {
        var that = this
        WxSearch.wxSearchHiddenPancel(that);
    },

    swiperTap: function (e) {
        console.log(e);
    },
    
    // 当swiper轮播图改变时
    swiperCurrentChange: function (e) {
        var thar = this
        console.log(e);
        // 记录日志，记录swiper轮播图当前页的id
        //console.log("page/index/index:",
        //    util.formatTime(new Date),
        //    "Function * onLoad * Success.");
    }

} )
