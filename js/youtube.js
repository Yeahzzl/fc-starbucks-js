// Youtube IFrame API를 비동기로 로드합니다.
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동재생 유무
      loop: true,
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}
