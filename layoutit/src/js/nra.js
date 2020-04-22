function pageRedirectgun() {
   window.location.href = "file:///C:/Users/phili/Documents/GitHub/project2/layoutit/src/last_night_index.html";
};   

jQuery.when(
    jQuery.getJSON("http://127.0.0.1:5000/api/v1.0/nraTweet")
).done( function(json) {
    var tweets=json["tweet"];
    $.each(tweets, function(key, value){
    	$("#result").append(value + '<p>');
    });
});

// <script>
//     for (var i = 0; i <= tweets.length; i++) {
//       document.write('<div>' + i.toString() + '</div>');
//     }
// </script>
//     // $(document).ready(function(){
    //     var supercarObject = {"brand": "Lamborghini", "model" : "Huracan", "origin": "Italy"};
    //     $.each(supercarObject, function(key, value){
    //         $("#result").append(value + '<td>');
    //     });
    // });