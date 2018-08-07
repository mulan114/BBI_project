$(document).ready(function(){
	$.getJSON('http://api.twitter.com/1/statuses/user_timeline/envato.json?count=1&amp;callback=?', function(tweets){
		$("#twitter").html(format_twitter(tweets));
	});
});