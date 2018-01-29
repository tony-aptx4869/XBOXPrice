//index.js
var qcloud      = require('../../vendor/wafer2-client-sdk/index')
var config      = require('../../config')
var util        = require('../../utils/util.js')
var WxSearch    = require('../../wxSearch/wxSearch.js')
var app = getApp();

Page( {
    data: {
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=",
        banner: {
            itemImgs: [ {
                    id: 111,
                    src: "../../imgs/banners/0.jpg"
                }, {
                    id: 222,
                    src: "../../imgs/banners/1.jpg"
                }, {
                    id: 333,
                    src: "../../imgs/banners/2.jpg"
                }
            ],
            indicatorDots: true,
            indicatorColor: "rgba(255, 255, 255, .5)",
            indicatorActiveColor: "#FFFFFF",
            autoplay: false,
            interval: 5000,
            duration: 500,
            circular: true
        },
        category: [ {
                id: 0,
                title: '会员资格',
                icon: '../../imgs/category/pass.png'
            }, {
                id: 1,
                title: '1月会免',
                icon: '../../imgs/category/gold.png'
            }, {
                id: 2,
                title: 'X1X强化',
                icon: '../../imgs/category/x1x.png'
            }, {
                id: 3,
                title: '中文游戏',
                icon: '../../imgs/category/chs.png'
            }, {
                id: 4,
                title: '折扣游戏',
                icon: '../../imgs/category/discountGame.png'
            }, {
                id: 5,
                title: '折扣DLC',
                icon: '../../imgs/category/discountDLC.png'
            }, {
                id: 6,
                title: '免费游戏',
                icon: '../../imgs/category/freeGame.png'
            }, {
                id: 7,
                title: '免费DLC',
                icon: '../../imgs/category/freeDLC.png'
            }, {
                id: 8,
                title: '版本更新',
                icon: '../../imgs/category/update.png'
            }

        ]
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
