// pages/clubs/clubinfo/members/members.js
var webreq = require('../../../webreqs.js');
Page({

    /**
     * Page initial data
     */
    data: {
        "clubid": 1,
        "clubname": "Unknown Club",
        "members": null
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {
        if (options.id) {
            var self = this;
            var url = 'http://localhost/members.json';
            webreq.getJSONReqret(url, function(res) {
                self.setData(res);
            }, 1);
        }
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function() {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function() {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function() {
        return {
            title: this.data.info.clubname,
            path: 'pages/home/home?clubid=' + this.data.clubid,
            imageUrl: this.data.icon
        }
    }
})