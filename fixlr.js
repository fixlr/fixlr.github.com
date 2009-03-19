function jsonFlickrFeed(rsp) {
	for (var i=0; i<rsp.items.length; i++){
		var item = rsp.items[i];
		
		var url = item.media.m.replace(/\_m\./, '_s.');
		var li = document.createElement('li');
		var img = document.createElement('img');
		var anch = document.createElement('a');
		img.setAttribute('src', url);
		img.setAttribute('alt', '');
		img.setAttribute('width', '75');
		img.setAttribute('height', '75');
		anch.setAttribute('href', item.link);
		anch.appendChild(img);
		li.appendChild(anch);
		document.getElementById('flickr_update_list').appendChild(li);
	}
}

function twitterCallback2(C) {
    var A = [];
    for (var D = 0; D < C.length; D++) {
        var E = C[D].user.screen_name;
        var B = C[D].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,
        function(F) {
            return '<a href="' + F + '">' + F + "</a>"
        }).replace(/\B@([_a-z0-9]+)/ig,
        function(F) {
            return F.charAt(0) + '<a href="http://www.twitter.com/' + F.substring(1) + '">' + F.substring(1) + "</a>"
        });
        A.push('<li><a style="font-size:85%" href="http://twitter.com/' + E + "/statuses/" + C[D].id + '">&#8658;</a> <span>' + B + '</span></li>')
    }
    document.getElementById("twitter_update_list").innerHTML = A.join("")
}
