// var WebTorrent = require('webtorrent-hybrid')
var WebTorrent = require('../index')
var fs = require('fs')

var client = new WebTorrent()

var torrentId = 'magnet:?xt=urn:btih:b83cfdad42eae546e2b77c05b862fb4414e2a298'

console.log('torrentId:\t', torrentId)

client.add(torrentId, function (torrent) {
  var files = torrent.files
  var length = files.length
  // Stream each file to the disk
  files.forEach(function (file) {
    var source = file.createReadStream()
    var destination = fs.createWriteStream(file.name + ".new")
    source.on('end', function () {
      console.log('file:\t\t', file.name)
      // close after all files are saved
      if (!--length) process.exit()
    }).pipe(destination)
  })
})
