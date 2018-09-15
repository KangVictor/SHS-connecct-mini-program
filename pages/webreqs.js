module.exports = {
    getJSONReqfail,
    getJSONReqdef,
    getJSONReqret
}

function getJSONReqfail(u, s, f) {
    wx.request({
        url: u,
        header: {
            'content-type': 'application/json'
        },
        success: function(res) {
            if (res.statusCode == 200) {
                s(res.data);
            } else {
                f('ERR'+res.statusCode);
            }
        },

        fail: function() {
            f('Request Failed');
        }
    })
}

function getJSONReqdef(url, success) {
    getJSONReqfail(url, success, defaultFail);
}

function getJSONReqret(url, success, delta) {
    getJSONReqfail(url, success, function() {
        defaultFail();
        wx.navigateBack({
            delta: 1
        })
    })
}

function defaultFail(err) {
    wx.showModal({
        title: 'Unable to load',
        content: 'ERR:'+err+' Please check your internet connection and try again',
        confirmText: 'OK',
        showCancel: false
    })
}