var AlbumListing = function (search) {
  this.search = search
  this.albums = []
}

AlbumListing.prototype = {
  getData: function () {
    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.spotify.com/v1/search?q=' + this.search + '&type=album')
    console.log(request)
    request.onload = function () {
      if (request.status !== 200) return
      var jsonString = request.responseText
      var albums = JSON.parse(jsonString)
      this.albums = albums
      // this.onUpdate()
    }.bind(this)
    request.send()
  }
}
