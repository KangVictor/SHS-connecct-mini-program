// pages/clubs/clubs.js
var webreqs = require('../webreqs.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inputShowed: false,
        inputVal: "",
        'clubs': [{
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
            this.setData({'clubs': data.clubs});
        })
    },


    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },

    inputFinish: function (e){
        var url = 'http://localhost/cq.json';
        wx.showLoading({
            title: 'searching',
        })
        webreqs.getJSONReqfail(url, data => {
            this.setData({ 'clubs': data.clubs });
            wx.hideLoading();
        }, () => {
            wx.showToast({
                title: 'Loading failed',
                icon: 'fail'
            })
        })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        var url = 'http://localhost/cq.json';
        webreqs.getJSONReqdef(url, data => {
            this.setData({ 'clubs': data.clubs });
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        wx.showToast({
            title: 'hi',
        })
        var url = 'http://localhost/cq.json';
        webreqs.getJSONReqdef(url, data => {
            for(var club in data.clubs){
                this.data.clubs.push(club);
            }
            this.setData({
                'clubs': this.data.clubs
            });
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})