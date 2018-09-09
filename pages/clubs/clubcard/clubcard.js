// pages/clubs/clubcard/clubcard.js
Component({
    /**
     * Component properties
     */
    properties: {
        imagesrc: {
            type: String,
            value: '/resources/clubdefault.png'
        },
        width: {
            type: String,
            value: '100%'
        },
        height: {
            type: String,
            value: '100%'
        },
        textcolor: {
            type: String,
            value: '#ffffff'
        },
        url: {
            type: String,
            value: '/pages/clubs/clubinfo/clubinfo?clubid=null'
        }
    },

    /**
     * Component initial data
     */
    data: {

    },

    /**
     * Component methods
     */
    methods: {
    }
})