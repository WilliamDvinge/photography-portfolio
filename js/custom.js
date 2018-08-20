$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '8459445118',
        limit: 24,
        resolution: 'standard_resolution',
        accessToken: '8459445118.1677ed0.1dd0ef921770489d9f5dc799e50d3fbc',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 col-md-4 col-sm-6 instaimg"><div><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});