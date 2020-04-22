function pageRedirectgun() {
   window.location.href = "../index.html";
};   

jQuery.when(
    jQuery.getJSON("http://127.0.0.1:5000/api/v1.0/nraTweet")
).done( function(json) {
    var tweets=json["tweet"];
    $.each(tweets, function(key, value){
    	$("#result").append(value + '<p>');
    });
});

