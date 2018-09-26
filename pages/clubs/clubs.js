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
        currentpage: -1,

        clubs: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var self = this;
        var url = 'https://connect.shs.cn/mp?action=searchClubRandom&count=15';
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
        this.setData({
            inputVal: this.data.inputVal.replace(/^\s+|\s+$/g, ""),
            //Takes care of excessive spaces
            currentpage: 0
        })
        let cp = this.data.currentpage;
        var iv = this.data.inputVal.replace(' ', '+');
        if (this.data.inputVal) {
            var url = 'https://connect.shs.cn/mp?action=searchClub&page=' + cp + '&keywords=' + iv;
            wx.showLoading({
                title: 'searching...',
            })
            webreqs.getJSONReqdef(url, data => {
                this.setData({
                    'clubs': data.clubs
                });
            })
            wx.hideLoading();
        }
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        var url = 'https://connect.shs.cn/mp?action=searchClubRandom&count=15';
        if (this.data.inputVal) {
            let cp = this.data.currentpage;
            var iv = this.data.inputVal.replace(' ', '+');
            url = 'https://connect.shs.cn/mp?action=searchClub&page=' + cp + '&keywords=' + iv;
        }

        webreqs.getJSONReqdef(url, d => {
            this.setData(d);
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        this.setData({
            loadmore: true,
        });

        var url = 'https://connect.shs.cn/mp?action=searchClubRandom&count=8';
        if(this.data.inputVal){
            let cp = this.data.currentpage;
            var iv = this.data.inputVal.replace(' ', '+');
            var url = 'https://connect.shs.cn/mp?action=searchClub&page=' + cp + '&keywords=' + iv;
        }
        webreqs.getJSONReqdef(url, d => {
            if (!d.clubs) {
                //clubs list empty
                this.setData({
                    loadedall: true,
                    loadmore: false
                });
                return;
            }
            for (var i = 0; i < d.clubs.length; i++) {
                this.data.clubs.push(d.clubs[i]);
            }
            this.setData({
                currentpage: this.data.currentpage + 1,
                clubs: this.data.clubs
            });
        });
        this.setData({
            loadmore: false
        });
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})