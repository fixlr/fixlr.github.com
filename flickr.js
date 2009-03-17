function jsonFlickrFeed(rsp) {
	for (var i=0; i<rsp.items.length; i++){
		var url = rsp.items[i].media.m;
		
		var li = document.createElement('li');
		var img = document.createElement('img');
		img.setAttribute('src', url.replace(/\_m\./, '_s.'));
		img.setAttribute('alt', url.replace(''));
		img.setAttribute('width', '75');
		img.setAttribute('height', '75');
		
		li.appendChild(img);
		document.getElementById('flickr_update_list').appendChild(li);
	}
}