 // Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 9;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 13.9;
var followBearing = 2;
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
    footer: '<footer class="page-footer font-small unique-color-dark" style="background-color: #383838">' + '<div class="container text-center text-md-left mt-5">' + '<div class="row mt-3">' + '<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">' + '<hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">' + '<a href="http://www.arkansasonline.com" target="_blank"><img alt="Arkansas Democrat-Gazette" src="https://s3.amazonaws.com/new_videos/year_in_pictures/logo.png" class="center" style="width: 100%"></a>' + '<div class="col-md-6 col-lg-9 text-center text-md-right">' + '<a class="fb-ic">' + '<a href="https://www.facebook.com/arkansasonline/" target="_blank"><img src="facebook.png" style="width:20px"></a>' + '<a class="tw-ic"><a href="https://twitter.com/arkansasonline" target="_blank">' +
    '<img src="twitter.png" style="width: 20px;"></a>' + '<a class="ins-ic"><a href="https://instagram.com/arkansasonline" target="_blank">' + '<img src="instagram.png" style="width: 20px;"></a>' + '<a class="li-ic"><a href="https://www.linkedin.com/company/arkansas-democrat-gazette" target="_blank">' +
    '<img src="linkedin.png" style="width: 20px;"></a>' + '</div>' + '</div>' + '<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">' + '<h6 class="text-uppercase font-weight-bold" style="color: white; padding-top:20px">About</h6>' + '<hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; color: white; border-bottom: 1px solid White;"><br>' +
    '<small><a href="https://www.arkansasonline.com/tools/termsofuse/" style="color: white">Terms of Use</a><br></small>' + '<small><a href="http://adv.arkansasonline.com/" style="color: white">Advertising</a><br></small>' + '<small><a href="https://www.jobsarkansas.com/Jobs/-quat-arkansas%20democrat-gazette-quat-?source=5&countryId=3" style="color: white">Careers</a><br></small>' + '<small><a href="https://www.arkansasonline.com/tools/privacystatement/" style="color: white">Privacy Statement</a></small>' + '</div><div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">' + '<h6 class="text-uppercase font-weight-bold" style="color: white; padding-top:20px">Newsroom</h6>' + '<hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; color: white;   border-bottom: 1px solid White;"><br>' + '<small><a href="https://www.arkansasonline.com/corevalues/" style="color: white">Core Values</a><br></small>' + '<small><a href="https://www.arkansasonline.com/contacts/newstips/" style="color: white">News Tips</a><br></small>' + '<small><a href="https://www.arkansasonline.com/emails/subscribe/" style="color: white">Newsletters</a><br></small>' + '<small><a href="https://digital.olivesoftware.com/Olive/ODN/ArDemocrat/" style="color: white">Today&rsquo;s Paper</a></small>' + '</div>' + '<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">' + '<h6 class="text-uppercase font-weight-bold" style="color: white; padding-top:20px">Contact</h6>' + '<hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; color: white;   border-bottom: 1px solid White;"><br>' + '<small><a href="https://www.arkansasonline.com/digital/faq/" style="color: white">Digital Replica FAQ</a><br></small>' + '<small><a href="https://www.arkansasonline.com/settings/" style="color: white">Subscriber Help</a><br></small>' + '<small><a href="https://www.arkansasonline.com/contact/voicesform/" style="color: white">Letters to the Editor</a><br></small>' + '<small><a href="https://www.arkansasonline.com/staff/" style="color: white">Newspaper Staff</a></small>' + '</div></div></div>' + '<div class="footer-copyright text-center py-4" style="color: white; font-size: 14px; padding: 0px;">Copyright © 2020, Arkansas Democrat-Gazette, Inc.</div>' + '</footer>',
    chapters: [
        {
            id: 'slide-0',
            // title: '2020 Little Rock Marathon',
            // image: 'https://cdn-tts.pressreader.com/mediaservice/38853_1/resized_276302-tm_0303marathon4430_37-25950.JPG',
            description: '<h1>2020 Little Rock Marathon Preview</h1><p>By Yutao Chen and Pete Perkins</p> <img src="https://cdn-tts.pressreader.com/mediaservice/38853_1/resized_276302-tm_0303marathon4430_37-25950.JPG"><br></br>Thousands of runners are set to compete in the Little Rock Marathon, which begins in the city&rsquo;s downtown, crosses into North Little Rock and then back into the capital city. <br></br>Runners will make their way through a variety of neighborhoods and city landmarks, including Central High School and the state Capitol. <br></br><span class="badge badge-warning" style="font-size: 0.9em">Scroll down</span> for an interactive look at this year&rsquo;s route.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'slide-1',
            title: 'LaHarpe Boulevard',
            image: 'https://media.arkansasonline.com/img/photos/2019/03/03/resized_260126-lr_marathon-073_91-25950_t1000.JPG?cc6fa094ad523b984325c7879220d3883a443e7f',
            description: '<br>Each of the approximately 2,000 Little Rock Marathon entrants — each runner, walker and roller — will wait on LaHarpe Boulevard before the start. <br></br>Often, hundreds of hours of training go in to tackling the course of 26 miles, 385 yards.',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'drive-slide-0',
            title: 'Broadway Bridge',
            image: 'broadway.JPG',
            description: '<br>The climb to the apex of the Broadway Bridge is the first of many inclines, but at the start of the marathon’s second mile, the required effort is inconsequential. <br></br>At this point, marathons are easy. Pleasure still rules.',
            location: {
                // location information is from the drive route
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'William J. Clinton Presidential Library',
            // image: './path/to/image/source.png',
            description: '<video autoplay loop muted><source src="https://s3.amazonaws.com/new_videos/2020marathon/1.mp4" type="video/mp4"></video>As entrants pass the library to their left, relative success over the next two to six hours is strongly correlated to how they feel this early in the race. <br></br>Anyone who already has begun to struggle will know they are in for a long, long day.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Bill and Hillary Clinton National Airport',
            image: 'https://media.arkansasonline.com/img/photos/2019/03/03/resized_276302-tm_0303marathon0527_1-25950_t1000.JPG?cc6fa094ad523b984325c7879220d3883a443e7f',
            description: '<br>This is among the flattest parts of the course, but on a windy day, it can be as difficult to maintain pace by the airport as it is through the hills south of downtown and up into Park Hill. Whereas people line the streets in rows near the start and finish, the crowd is slight here.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'McArthur Park Historic District',
            image: 'park1.JPG',
            description: '<br>Nine miles in, the crowd size increases near McArthur Park, just when inspiration and encouragement from — in many cases — total strangers become a significant benefit to all in the race.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'Little Rock Central High School',
            image: 'central.JPG',
            description: '<br>Shortly after the start of the 13th mile, racers pass Central High, forever a significant national landmark for its role in the civil-rights movement. <br></br>Entrants are in their fourth of seven consecutive miles of rolling hills, and a turn to the east from offers the relief of a downhill stretch on Daisy Gatson Bates Drive.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: 'Arkansas State Capitol',
            image: 'capitol.JPG',
            description: '<br>About a mile past halfway, the field passes the Capitol building to its left. It stands as a treasured landmark to many Arkansans and Little Rock Marathon entrants. <br></br>Approximately two city blocks in length, it is a flat stretch that proceeds 4 miles of steep hills.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Allsopp Park',
            // image: './path/to/image/source.png',
            description: '<video autoplay loop muted><source src="https://s3.amazonaws.com/new_videos/2020marathon/3.mp4" type="video/mp4"></video>The downhill of Allsop Park Road marks the beginning of the end. It comes as a fast but relieving break after the long uphill grind into the Park Hill neighborhood. <br></br>However, traction can become an issue. This section that&rsquo;s 17 miles in turns potentially treacherous on rainy days.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: 'Rebsamen Park',
            image: 'rebs.JPG',
            description: '<br>In a search for irony, look no further than the Little Rock Marathon&rsquo;s out-and-back section into and out of Rebsamen Park. <br></br>It is the longest flat section of a race sometimes dreaded for its hilliness, but its visual tedium after 18 miles of landmarks and vibrant neighborhoods make it the least-favorite section for many entrants.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: 'Lincoln Avenue Viaduct',
            image: 'bridge.JPG',
            description: '<br>The finish line is less than 1 mile away from this distinctive bridge, long an earmark to the northwestern edge of downtown. <br></br>It is the site of the course&rsquo;s final aid station, renowned for its joyous, occasionally reckless rowdiness. Much is spilled here, by runners and volunteers alike.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: 'Finish',
            // image: './path/to/image/source.png',
            description: '<video autoplay loop muted><source src="finish.mp4" type="video/mp4"></video>' + '<br>Joy and relief intermingle here for most who have completed a footrace or wheelchair race of 26 miles, 385 yards. <br></br>A few time-conscious racers might experience varying degrees of disappointment, but even for those who have fallen short of their goals or expectations, it is hard to not find pleasure in the cumulative happiness and festivity of a marathon finish. ',
            location: {
              },
            onChapterEnter: [],
            onChapterExit: []
        },


        // You can add a normal slide in the middle of the drive slides to take a break
        // {
        //     id: 'slide-2',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'slide-3',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
    ]
};
