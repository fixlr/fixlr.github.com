(function() {
  window.jsonFlickrFeed = function(rsp) {
    var A = [];
    var previousTitle = '';
    for (var i=0; i<rsp.items.length; i++){
      var item = rsp.items[i];
      var url = item.media.m.replace(/\_m\./, '_s.');
      var published_date = new Date(item.published).toDateString();

      if (item.title == previousTitle) {
        A.push('<li class="extra section photo"><a rel="me" href="'+item.link+'"><img width="25" height="25" rel="me" class="thumb" src="'+url+'" alt=""></a></li>');
      }
      else {
        previousTitle = item.title;
        A.push('<li class="section photo"><a rel="me" href="'+item.link+'"><img class="thumb" width="75" height="75" src="'+url+'" alt=""> <span class="heading">'+item.title+'</span></a> <span class="tag">'+published_date+'</span></li>');
      }
    }
    document.getElementById('flickr_update_list').innerHTML = A.join("");
  }

  loadContentFrom = function(src) {
    var script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  }

  window.onload = function() {
    loadContentFrom('http://api.flickr.com/services/feeds/photos_public.gne?id=72996797@N00&lang=en-us&format=json');
  }
})();
