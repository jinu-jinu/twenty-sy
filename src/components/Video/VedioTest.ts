import { state } from '../Store/store';

const urls = ['s2-01', 's3-01', 's3-02', 's4-01', 's5-01', 's6-01'];

export const VideoTest = () => {
  state.loadedVideoCount = 0;

  const videos = urls.map((url, i) => {
    const video = document.createElement('video');
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.src = `/video/${url}.mp4`;
    video.oncanplaythrough = () => {
      state.loadedVideoCount += 1;
    };

    return video;
  });
};
