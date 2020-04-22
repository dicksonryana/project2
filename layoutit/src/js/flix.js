function pageRedirectflix() {
   window.location.href = "file:///C:/Users/phili/Documents/GitHub/project2/layoutit/src/last_night_index.html";
};   

jQuery.when(
    jQuery.getJSON("http://127.0.0.1:5000/api/v1.0/netflixTweet")
).done( function(json) {
    var accosta=json['tweet'];
    console.log(accosta[5] )
});