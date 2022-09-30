import throttle from 'lodash.throttle';
import VimeoPlayer from '@vimeo/player';

const PLAYER_CURENT_TIME = 'videoplayer-current-time';

const iframeId = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframeId);

player.on('timeupdate', throttle(onPlay, 1000));

const parsePlayerStopTime = load(PLAYER_CURENT_TIME);

player.setCurrentTime(parsePlayerStopTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      localStorage.removeItem(PLAYER_CURENT_TIME);
      break;
  }
});

function onPlay(data) {
  localStorage.setItem(PLAYER_CURENT_TIME, JSON.stringify(data.seconds));
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Do not touch this value in Application: ', error.name);
  }
}
