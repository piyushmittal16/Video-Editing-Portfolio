import React, { useState, useEffect, useRef } from 'react';
import { Play, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import CinemaModal from './CinemaModal';

export default function ReelShowcase({ reels, onDeleteReel }) {
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
  // When modal IS open or out of view, PAUSE all carousel videos to free GPU for the main player!
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        if (isIntersecting && !selectedReel) {
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [isIntersecting, selectedReel, reels]);

  // Manual scroll controls (shown when more than 3 reels)
  const handleScrollManual = (direction) => {
    if (!trackRef.current) return;
    const offset = direction === 'left' ? -320 : 320;
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  // Determine if a reel is deletable (custom/owner-added = has "custom-" prefix)
  const isCustomReel = (reel) => reel.id && reel.id.startsWith('custom-');

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
              EDITS &amp; REELS.
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

        {/* Centered Reel Grid / Track */}
        <div
          ref={trackRef}
          className="reels-carousel-track"
          style={{
            justifyContent: reels.length <= 3 ? 'center' : 'flex-start',
            display: 'flex',
            flexWrap: reels.length <= 3 ? 'wrap' : 'nowrap',
            alignItems: 'flex-start'
          }}
        >
          {reels.map((reel, index) => (
            <div
              key={reel.id || index}
              className={`reel-card-vertical clean-reel-card ${reel.isLandscape ? 'reel-card-landscape' : ''}`}
              onClick={() => setSelectedReel(reel)}
              title={reel.title || 'Play Video'}
              style={{
                transform: 'translate3d(0,0,0)',
                willChange: 'transform'
              }}
            >
              {/* Autoplay Video with Hardware Acceleration */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.videoUrl}
                muted
                loop
                playsInline
                preload="metadata"
                className="reel-card-video"
                style={{
                  transform: 'translate3d(0,0,0)',
                  willChange: 'transform'
                }}
              />

              {/* Delete Button on Hover — Only for owner-added custom reels */}
              {onDeleteReel && isCustomReel(reel) && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Delete this reel?')) {
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

      </div>

      {/* Cinema Modal Popup (When a reel is clicked) */}
      {selectedReel && (
        <CinemaModal
          reel={selectedReel}
          onClose={() => setSelectedReel(null)}
          onDelete={onDeleteReel && isCustomReel(selectedReel) ? () => {
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
