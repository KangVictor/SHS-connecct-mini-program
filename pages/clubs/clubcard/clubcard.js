// pages/clubs/clubcard/clubcard.js
var webreq = require('../../webreqs.js');

Component({
    /**
     * Component properties
     */
    properties: {
        imagesrc: String,
        cid: {
            type: Number,
            value: 0
        }
    },
    data: {
        imgsrc: '/resources/clubdefault.png',
        textcolor: '#fff',
        name: 'ClubName',
        intro: 'No Club Description'
    },
    lifetimes: {
        attached: function() {
            var url = 'https://connect.shs.cn/mp?action=getClubPreview&clubid=' + this.data.cid;
            webreq.getJSONReqdef(url, data => {
                this.setData({
                    name: data.name,
                    imgsrc: 'https://connect.shs.cn' +data.imagesrc,
                    intro: (data.intro)? data.intro: 'NONE'
                });
            });
            if (this.data.imagesrc)
                this.setData({
                    imgsrc: this.properties.imagesrc
                });
        }
    }
})