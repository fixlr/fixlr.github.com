(function() {
  window.githubCallback = function(projs) {
    var A = [],
      repos = projs.user.repositories;

    repos.sort(function(a, b) {
      if (a.pushed_at < b.pushed_at)
        return 1;
      if (a.pushed_at > b.pushed_at)
        return -1;
      return 0;
    });

    for (var i=0; i < repos.length; i++){
      var r = repos[i],
        description = '';

      if (r.private == false && r.fork == false) {
        if (r.description) {
          description = '<span class="tag">'+r.description+'</span>';
        }
        A.push('<li class="section project"><a rel="me" href="'+r.url+'"><img class="thumb" src="images/proj.png" alt=""> <span class="heading">'+r.name+'</span></a> '+description+'</li>');
      }
    }
    document.getElementById('github_update_list').innerHTML = A.join("");
  }

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
    loadContentFrom('http://github.com/api/v1/json/fixlr?callback=githubCallback');
  }
})();
