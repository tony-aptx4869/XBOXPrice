//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var WxSearch = require('../../wxSearch/wxSearch.js')
var appInstance = getApp();

Page({
    data: {},

    onLoad: function () {
      console.log('onLoad')
      var that = this
      // 2 搜索栏初始化
      // 初始化的时候渲染wxSearchdata，第二个为你的search高度
      WxSearch.init(that, 34, ['战争机器 4', 'Halo 5: Guardians', '舞力全开2018', '光之子', 'ARCADE GAME SERIES: PAC-MAN', '蜡烛人', '使命召唤：二战', 'Micraft: Story Mode - Season Two', 'Micraft: Story Mode', '光环：士官长合集']);
      WxSearch.initMindKeys(['战争机器4', '光环', '舞力全开2018', '蜡烛人', '使命召唤：二战', '光之子', '光环：士官长合集', 'ARCADE GAME SERIES: PAC-MAN', 'Micraft: Story Mode', 'Micraft: Story Mode - Season Two']);
    },

    wxSearchFn: function (e) {
      var that = this
      WxSearch.wxSearchAddHisKey(that);
    },

    wxSearchInput: function (e) {
      var that = this
      WxSearch.wxSearchInput(e, that);
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
    }

})
