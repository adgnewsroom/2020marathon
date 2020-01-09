// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 7;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 10;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    // style: 'mapbox://styles/mapbox/light-v10',
    style: 'mapbox://styles/yutaochen/ck55naf3404lv1cpbvk4y4wyx',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1IjoieXV0YW9jaGVuIiwiYSI6ImNpdXlsOGgxZjA1NmEyb3BkZnVseTlvOHEifQ.Q2eYiNqKAgGO8etQgC-Sgw',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: '2020 Little Rock Marathon Preview',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'Yutao Chen',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slide-0',
            // title: '2020 Little Rock Marathon',
            // image: 'https://cdn-tts.pressreader.com/mediaservice/38853_1/resized_276302-tm_0303marathon4430_37-25950.JPG',
            description: '<h1>2020 Little Rock Marathon Preview</h1> <img src="https://cdn-tts.pressreader.com/mediaservice/38853_1/resized_276302-tm_0303marathon4430_37-25950.JPG"><br></br>Two people with Arkansas roots are the male and female winners of the 2019 Little Rock Marathon. Jeremy Provence, 28, crossed the finish line with a time of 2:42:24. <br></br>Though Provence currently lives in Florence, Ala., where he is head coach of the cross country team at the University of North Alabama, he grew up in Mountainburg in Northwest Arkansas.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            title: 'LaHarpe Boulevard',
            image: 'https://media.arkansasonline.com/img/photos/2019/03/03/resized_260126-lr_marathon-073_91-25950_t1000.JPG?cc6fa094ad523b984325c7879220d3883a443e7f',
            description: 'The race will start at LaHarpe Boulevard behind the Statehouse Convention Center, just east of the Marriott Hotel overhang.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'drive-slide-0',
            title: 'Broadway Bridge',
            // image: 'https://cdn-tts.pressreader.com/mediaservice/38855_1/resized_260126-lr_marathon-036_58-25950.JPG',
            description: '<video style="width: 29vw; height: auto" autoplay loop muted><source src="https://s3.amazonaws.com/new_videos/2020marathon/4.mp4" type="video/mp4"></video>Copy these sections to add to your story.',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },

        // You can add a normal slide in the middle of the drive slides to take a break
        {
            id: 'slide-4',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
