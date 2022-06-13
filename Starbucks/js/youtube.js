// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// �Լ� �̸��� �����ؼ��� �ȵ�.
function onYouTubeIframeAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
    // ���� ����� ��Ʃ�� ���� id
    videoId: 'An6LvWQuj_8',
    playerVars: {
        autoplay: true,
        controls:2,
        loop: true,
        playlist: 'An6LvWQuj_8',
    },
    events: {
        onReady: function (event) {
            // ���Ұ�.
            event.target.mute()
        }
    }
  });
}