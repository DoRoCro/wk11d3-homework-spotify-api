var AlbumListing = function (search) {
  this.search = search
  this.albums = []
}

AlbumListing.prototype = {
  getData: function () {
    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.spotify.com/v1/search?q=' + this.search + '&type=album')
    console.log(request)
  }
}
