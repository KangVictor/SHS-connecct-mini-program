// pages/clubs/clubinfo/clubinfo.js
var webreq = require("../../webreqs.js");

class clubinfo {
    static defaultdes = "Lorem ipsum...... The club and its contents are currently loading... please wait...";
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        clubid: -1,
        icon: '/resources/clubdefault.png',
        images: [
            '/resources/clubdefault.png'
        ],
        info: {
            active: false,
            clubname: 'Loading...',
            leader: 'DJ Blyatman',
            loc: 'XMT roof-top',
            description: clubinfo.defaultdes,
            members: -1
        },
        join: {
            allow: true,
            loading: false
        },
        manage: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.showNavigationBarLoading();
        if (options.id && (options.id > 0)) {
            var clubid = options.id;
            var self = this;
            var url = 'http://localhost/clubdetails.json'
            webreq.getJSONReqret(url,
                function(data) {
                    wx.hideNavigationBarLoading();
                    //if (clubid == data.clubid){
                    self.setData(data);
                    //}
                }, 1
            )
        } else if (options.id == -1) {
            wx.showModal({
                title: 'You are happy',
                content: 'yes indeed you are very gay',
            })
        } //else {
            //wx.showModal({
           //     title: 'Unknown Club',
            //    content: 'You find yourself lost in the puzzle of clubs. Quivering, you took a step back',
             //   confirmText: 'OK',
             //   showCancel: false,
             //   complete: function(res) {
             //       wx.navigateBack({
              //          delta: 1
             //       })
            //    }
          //  })
       //}
    },

    onShareAppMessage(property) {
        return {
            title: this.data.info.clubname,
            path: 'pages/home/home?clubid=' + this.data.clubid,
            imageUrl: this.data.icon
        }
    },

    imgpreview: function(e){
        var src = e.currentTarget.src;
        wx.previewImage({
            urls: this.data.images,
            current: src
        })
    },

    joinClub: function() {
        this.setData({
            "join.loading": true,
        })
    },

    manageClub: function() {

    },
})