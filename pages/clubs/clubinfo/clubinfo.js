// pages/clubs/clubinfo/clubinfo.js
class clubinfo {
    static defaultdes = "Lorem ipsum...... The club and its contents are currently loading... please wait...";
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        images: [
            '/resources/clubdefault.png'
        ],
        icon: '/resources/clubdefault.png',
        join: {
            allow: true,
            loading: false
        },
        manage: false,
        clubid: -1,
        info: {
            active: false,
            clubname: 'Loading...',
            leader: 'DJ Blyatman',
            loc: 'XMT roof-top',
            description: clubinfo.defaultdes
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.showNavigationBarLoading();
        if(options.id) {
            wx.setNavigationBarTitle({
                title: options.id,
            })
        }
        if(options.id && (options.id > 0)){
            var clubid = options.id;
            this.setData({
                "clubid": clubid,
                'info.description': 'You accessed this club via a share, club id is: '+clubid
            });
        } else if(options.id == -1){
            wx.showModal({
                title: 'You are happy',
                content: 'yes indeed you are very gay',
            })
        } else {
            wx.showModal({
                title: 'Unknown Club',
                content: 'You find yourself lost in the puzzle of clubs. Quivering, you took a step back',
                showCancel: false,
                complete: function(res){
                    wx.navigateBack({
                        delta: 1
                    })
                }
            })
        }
    },
    onShareAppMessage(property) {
        return {
            title: this.data.info.clubname,
            path: 'pages/home/home?clubid='+this.data.clubid,
            imageUrl: this.data.icon
        }
    },

    joinClub: function() {
    },

    manageClub: function() {

    }
})