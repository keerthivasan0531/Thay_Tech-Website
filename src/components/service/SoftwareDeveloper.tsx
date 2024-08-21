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
      { threshold: 0.5 } // Adjust this value if you want more or less of the video visible before it starts
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
      <div className="bg-[#F5F5F5] flex items-center p-5">
        <div className="flex-1">
          <h1 className="font-bold text-4xl mb-4 ml-20 animate-down-to-up">
            <b>Software Development</b>
          </h1>
          <p
            className="ml-20 mb-20 animate-down-to-up"
            style={{ animationDelay: '0.5s' }}
          >
            Let decide on what you want. We will deliver what you need.
          </p>
        </div>
        <div className="flex-1 text-right">
          <img
            src="/Software-images/img1-soft.png"
            alt="Head Software Development"
            className="max-w-full h-auto"
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
