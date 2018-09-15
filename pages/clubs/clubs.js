// pages/clubs/clubs.js
var webreqs = require('../webreqs.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputShowed: false,
        inputVal: "",

        loadmore: false,
        loadedall: false,
        currentpage: 0,

        clubs: [{
            "clubid": 0,
            "logo": "/resources/clubdefault.png",
            "name": "Load Error",
            "data": "unused"
        }]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var self = this;
        var url = 'http://localhost/cq.json';
        webreqs.getJSONReqdef(url, data => {
            this.setData({
                'clubs': data.clubs
            });
        })
    },


    showInput: function() {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function(e) {
        this.setData({
            inputVal: e.detail.value
        });
    },

    inputFinish: function(e) {
        var url = 'http://localhost/cq.json';
        wx.showLoading({
            title: 'searching',
        })
        webreqs.getJSONReqdef(url, data => {
            this.setData({
                'clubs': data.clubs
            });
        })
        wx.hideLoading();
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        var url = 'http://localhost/cq.json';
        var self = this;
        webreqs.getJSONReqdef(url, d => {
            this.setData(d);
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        if (this.data.currentpage < 3) {
            this.setData({
                loadmore: true,
                currentpage: this.data.currentpage + 1
            });
            var url = 'http://localhost/cq.json';
            webreqs.getJSONReqdef(url, d => {
                for (var i = 0; i < d.clubs.length; i++) {
                    this.data.clubs.push(d.clubs[i]);
                }
                this.setData({
                    clubs: this.data.clubs
                });
            });
            this.setData({
                loadmore: false
            });
        } else {
            this.setData({
                loadmore: false,
                loadedall: true
            });
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})