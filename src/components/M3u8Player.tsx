import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string; // m3u8 주소
  autoplay?: boolean;
}

const M3u8Player: React.FC<VideoPlayerProps> = ({ src, autoplay = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // 1. Native HLS 지원 (Safari, iOS 등)
      video.src = src;
      if (autoplay)
        video.play().catch((e) => console.error("Autoplay failed:", e));
    } else if (Hls.isSupported()) {
      // 2. hls.js 지원 환경 (Chrome, Firefox, Edge 등)
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoplay)
          video.play().catch((e) => console.error("Autoplay failed:", e));
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              alert("네트워크 오류가 발생했습니다.");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              alert("미디어 오류가 발생했습니다.");
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });
    }

    // Clean up
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src, autoplay]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls
        style={{ width: "100%", maxWidth: "100%" }}
      />
    </div>
  );
};

export default M3u8Player;
