export const useVideos: { [key: string]: HTMLVideoElement | null } = {
  video1: null,
  video2: null,
  video3: null,
  video4: null,
  video5: null,
  video6: null,
};

const urls = ['s1-01', 's2-01', 's2-02', 's3-01', 's4-01', 's5-01'];

export const videoInit = async () => {
  const videos = urls.map(
    (url, i) =>
      new Promise(res => {
        const video = document.createElement('video');
        video.loop = true;
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.src = `/video/${url}.mp4`;

        video.onloadeddata = () => {
          useVideos[`video${i + 1}`] = video;

          console.log(video, `video ${i + 1}`);

          return res;
        };
      })
  );

  await Promise.allSettled(videos);
};
