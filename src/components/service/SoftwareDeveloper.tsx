import { useEffect, useRef } from 'react';
import './SoftwareDeveloper.css';

function SoftwareDevelopment() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 } 
     );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="header-content">
        <div className="flex-1 animate-down-to-up">
          <h1 className="font-bold">
            <b>Software Development</b>
          </h1>
          <p className="">
            Let decide on what you want. We will deliver what you need.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/Software-images/Software.svg"
            alt="Head Software Development"
          />
        </div>
      </div>
      <div>
        <video
          className="videoPlayer"
          ref={videoRef}
          src="/Software-images/Presentation.mp4"
          muted
        ></video>
      </div>
    </div>
  );
}

export default SoftwareDevelopment;
