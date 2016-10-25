var WebTorrent = require('webtorrent-hybrid')

var client = new WebTorrent()

var filePath = './www/'

console.log('filePath:', filePath)

client.seed(filePath, function (torrent) {
  console.log('torrentId (info hash):', torrent.infoHash)
  console.log('torrentId (magnet link):', torrent.magnetURI)
})
