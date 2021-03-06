// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        logged: true,

        userid: -1,
        realname: "realname",
        nickname: "NickName",
        CASsum: 10,
        avatar: "https://picsum.photos/80",
        notifications: [
            {
                clubname: "sampleclub(id or name)",
                notifications: {
                    content: "notif",
                    time: "8012"
                }
            },
            {
                clubname2: "same"
            }
        ],
        myclubs: {
            part: 3,
            own: 1
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        if (options.clubid) {
            setTimeout(function() {
                wx.navigateTo({
                    url: '/pages/clubs/clubinfo/clubinfo?id=' + options.clubid
                })
            }, 800)
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },

    viewavatar: function(e){
        wx.previewImage({
            urls: [this.data.avatar]
        })
    },
    logout: function () {
        if(this.data.logged) {
            wx.showModal({
                title: 'Logout',
                content: 'Are you sure?',
                confirmText: 'Yes',
                cancelText: 'No',
                success: (res)=> {
                    if(res.confirm)
                    this.setData({logged:false});
                }
            })
        } else {
            wx.showModal({
                title: 'Error',
                content: 'You are not logged in',
                showCancel: false
            });
        }
    }
})