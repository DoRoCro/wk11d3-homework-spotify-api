var app = function () {
  // get input
  var albumSearchInput = document.querySelector('#search-query')
  // var searchInput = albumSearchInput.text
  var searchInput = 'Public Service Broadcasting'
  console.log(searchInput)
  var albumListing = new AlbumListing(searchInput)
  albumListing.getData()
  console.log(albumListing)

  // get output div
  var albumsDiv = document.querySelector('#albums')
}

window.onload = app
