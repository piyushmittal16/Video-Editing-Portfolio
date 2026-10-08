import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, Film, Upload, Trash2 } from 'lucide-react';
import CinemaModal from './CinemaModal';

export default function ReelShowcase({ reels, onOpenUpload, onDeleteReel }) {
  const [selectedReel, setSelectedReel] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const videoRefs = useRef([]);

  // Check URL query parameters to see if a specific reel link was opened
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reelId = params.get('reel');
    if (reelId) {
      const match = reels.find(r => r.id === reelId);
      if (match) setSelectedReel(match);
    }
  }, [reels]);

  // 1. Observe when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. High-performance video controller:
  // When in view and modal is NOT open, smoothly play videos.
  // When modal IS open or out of view, PAUSE all carousel videos immediately to free 100% GPU for the main player!
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        if (isIntersecting && !selectedReel) {
          video.play().catch(() => {
            video.muted = true;
            video.play().catch(() => {});
          });
        } else {
          video.pause();
        }
      }
    });
  }, [isIntersecting, selectedReel, reels]);

  // Manual scroll controls
  const handleScrollManual = (direction) => {
    if (!trackRef.current) return;
    const offset = direction === 'left' ? -320 : 320;
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section 
      id="reels" 
      ref={sectionRef}
      className="bg-graph-paper paper-overlay"
      style={{
        position: 'relative',
        padding: '5.5rem 1.5rem',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <span className="badge-tag badge-outline-black" style={{ letterSpacing: '0.04em' }}>[03] WORK SHOWCASE</span>
              <span className="badge-tag badge-red" style={{ letterSpacing: '0.04em' }}>
                <span className="pulse-dot"></span>
                MY EDITS
              </span>
            </div>
            
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#0c0d10', lineHeight: 1.1, letterSpacing: '0.03em' }}>
              EDITS & REELS.
            </h2>
          </div>

          {/* Left / Right Carousel Arrow Buttons (Only when reels overflow) */}
          {reels.length > 3 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button 
                onClick={() => handleScrollManual('left')}
                className="btn-brutal"
                style={{ width: '44px', height: '44px', padding: 0 }}
                aria-label="Previous Reel"
              >
                <ChevronLeft size={22} />
              </button>
              <button 
                onClick={() => handleScrollManual('right')}
                className="btn-brutal btn-brutal-red"
                style={{ width: '44px', height: '44px', padding: 0 }}
                aria-label="Next Reel"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          )}
        </div>

        {/* When NO reels are posted yet */}
        {reels.length === 0 ? (
          <div 
            style={{
              background: '#ffffff',
              border: '2px solid #0c0d10',
              borderRadius: '12px',
              padding: '4rem 2rem',
              textAlign: 'center',
              boxShadow: 'var(--shadow-brutal)',
              maxWidth: '650px',
              margin: '2rem auto'
            }}
          >
            <div 
              style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'rgba(255,42,75,0.12)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1.25rem',
                color: '#ff2a4b'
              }}
            >
              <Film size={28} />
            </div>

            <h3 className="font-display" style={{ fontSize: '1.7rem', color: '#0c0d10', marginBottom: '0.6rem', letterSpacing: '0.03em' }}>
              NO REELS POSTED YET
            </h3>

            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.65, maxWidth: '480px', margin: '0 auto 1.8rem', letterSpacing: '0.01em' }}>
              Upload your CapCut video edits directly from your system or Cloudinary to display them here.
            </p>

            <button 
              onClick={onOpenUpload}
              className="btn-brutal btn-brutal-red"
              style={{ padding: '0.9rem 2rem', fontSize: '0.95rem', letterSpacing: '0.04em' }}
            >
              <Upload size={17} />
              <span>Upload Your Reel Now</span>
            </button>
          </div>
        ) : (
          /* Centered Reel Grid / Track (Buttery Smooth 60FPS Video Rendering) */
          <div 
            ref={trackRef}
            className="reels-carousel-track"
            style={{ 
              justifyContent: 'center',
              display: 'flex',
              flexWrap: reels.length <= 4 ? 'wrap' : 'nowrap'
            }}
          >
            {reels.map((reel, index) => (
              <div 
                key={reel.id || index}
                className="reel-card-vertical clean-reel-card"
                onClick={() => setSelectedReel(reel)}
                title={reel.title || "Play Video"}
                style={{
                  transform: 'translate3d(0,0,0)',
                  willChange: 'transform'
                }}
              >
                {/* Clean Autoplay Video with Hardware Acceleration */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={reel.videoUrl}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="reel-card-video"
                  style={{
                    transform: 'translate3d(0,0,0)',
                    willChange: 'transform'
                  }}
                />

                {/* Subtle Owner Delete Button on Hover */}
                {onDeleteReel && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm("Delete this reel?")) {
                        onDeleteReel(reel.id);
                      }
                    }}
                    className="reel-delete-btn"
                    title="Delete Reel"
                    aria-label="Delete Reel"
                  >
                    <Trash2 size={16} />
                  </button>
                )}

                {/* Minimal Hover Overlay: Only Center Play Icon */}
                <div className="clean-hover-overlay">
                  <div 
                    style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      background: 'var(--accent-red)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      boxShadow: '0 0 25px var(--accent-red-glow)',
                      transform: 'scale(1)',
                      transition: 'transform 0.2s ease'
                    }}
                    className="clean-play-icon"
                  >
                    <Play size={28} fill="#ffffff" color="#ffffff" style={{ marginLeft: '4px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Cinema Modal Popup with ✕ Cross button (When a reel is clicked) */}
      {selectedReel && (
        <CinemaModal 
          reel={selectedReel} 
          onClose={() => setSelectedReel(null)}
          onDelete={onDeleteReel ? () => {
            onDeleteReel(selectedReel.id);
            setSelectedReel(null);
          } : null}
        />
      )}

      <style>{`
        .clean-reel-card {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          background: #000;
        }
        .clean-hover-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0);
          transition: background 0.2s ease;
          pointer-events: none;
        }
        .clean-play-icon {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.2s ease;
        }
        .clean-reel-card:hover .clean-hover-overlay {
          background: rgba(0, 0, 0, 0.35);
        }
        .clean-reel-card:hover .clean-play-icon {
          opacity: 1;
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
