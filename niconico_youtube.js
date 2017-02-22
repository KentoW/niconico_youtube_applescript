app = Application("Chrome")
win = app.windows()
var win_len = win.length
var m_site = []
for (var i=0; i<win_len; i++){
    var tabs = win[i].tabs()
    var tab_len = tabs.length
    for (var j=0; j<tab_len; j++){
        var url = tabs[j].url()
        if (url.slice(0,29) == "http://www.nicovideo.jp/watch"){
            m_site.push(tabs[j])
        }else if(url.slice(0,29) == "https://www.youtube.com/watch"){
            m_site.push(tabs[j])
        }
    }
}
var m_len = m_site.length
for (var i=0; i<m_len; i++){
    app.execute(m_site[i], {javascript:"var videoEL=document.querySelector('video');if(videoEL){if(videoEL.paused==false){videoEL.pause();}else{videoEL.play();}}else{var player = document.getElementById('external_nicoplayer');if(player.ext_getStatus()=='playing'){player.ext_play(false)}else{player.ext_play(true)};}"})
}
