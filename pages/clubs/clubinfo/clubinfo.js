// pages/clubs/clubinfo/clubinfo.js
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
            members: 8
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
        if(options.id && (options.id > 0)){
            var clubid = options.id;
            var self = this;
            wx.request({
                /*url: 'https://connect.shs.cn/mp?action=getClub&clubid='+clubid,*/
                url: 'http://localhost/clubdetails.json',
                data: {
                    
                },
                header: {
                    'content-type':'application/json'
                },
                success: function(res){
                    if(res.statusCode == 200){
                    let ret = res.data;
                    self.setData({
                        'icon': ret.icon,
                        'images': ret.images,
                        'info': ret.info
                    });
                    wx.hideNavigationBarLoading();
                    } else {
                        wx.navigateBack({
                            delta: 1
                        })
                        wx.showToast({
                            title: 'Unable to load club',
                            mask: true,
                            image: '/resources/iconno.png'
                        })
                    }
                },
                fail: function(){
                    wx.navigateBack({
                        delta: 1
                    })
                    wx.showToast({
                        title: 'Unable to load club',
                        mask: true,
                        image: '/resources/iconno.png'
                    })
                }
            })
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
        this.setData({
            "join.loading": true,
        })
    },

    manageClub: function() {

    },
})