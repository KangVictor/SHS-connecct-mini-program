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
        cid: Number,
        name: {
            type: String,
            value: 'Unknown Club'
        }
    }
})