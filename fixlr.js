function greaderCallback(gr) {
	var A = [];
	for (var i = 0; i<10; i++){
		var r = gr.items[i];
		A.push('<li><a href="'+r.alternate.href+'">'+r.title+'</a></li>');
	}
	document.getElementById('greader_update_list').innerHTML = A.join("");
}

function githubCallback(projs) {
	var A = [];
	for (var i=0; i<projs.user.repositories.length; i++){
		var r = projs.user.repositories[i];
		A.push('<li><img src="images/public.png" alt="" /> <a href="'+r.url+'">'+r.name+'</a> <span style="font-size: 11px;">('+r.description+')</span></li>');
	}
	document.getElementById('github_update_list').innerHTML = A.join("");
}

function jsonFlickrFeed(rsp) {
	var A = [];
	for (var i=0; i<rsp.items.length; i++){
		var item = rsp.items[i];
		var url = item.media.m.replace(/\_m\./, '_s.');

		A.push('<li><a href="'+item.link+'"><img src="'+url+'" width="75" height="75" alt="" /></a></li>');
	}
	document.getElementById('flickr_update_list').innerHTML = A.join("");
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

