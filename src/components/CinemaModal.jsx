import React, { useState, useRef, useEffect } from 'react';
import { X, Volume2, VolumeX, Play, Pause, Download, Link as LinkIcon, Check, Trash2 } from 'lucide-react';

export default function CinemaModal({ reel, onClose, onDelete }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const videoRef = useRef(null);
  const scrubberRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const width = videoRef.current.videoWidth;
      const height = videoRef.current.videoHeight;
      if (width && height) {
        setIsLandscape(width > height);
      }
      if (scrubberRef.current) {
        scrubberRef.current.max = videoRef.current.duration || 100;
        scrubberRef.current.value = 0;
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // High performance timeupdate: update scrubber directly without triggering full React component re-renders!
  const handleTimeUpdate = () => {
    if (videoRef.current && scrubberRef.current) {
      scrubberRef.current.value = videoRef.current.currentTime;
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = parseFloat(e.target.value);
    videoRef.current.currentTime = seekTime;
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?reel=${reel.id}#reels`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(reel.videoUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${reel.title || 'video'}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch {
      const a = document.createElement('a');
      a.href = reel.videoUrl;
      a.download = `${reel.title || 'video'}.mp4`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setTimeout(() => setDownloading(false), 1200);
    }
  };

  return (
    <div 
      className="cinema-modal-backdrop" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Dynamic Modal Stage: Adapts automatically to Vertical (9:16) or Landscape (16:9) with GPU hardware acceleration */}
      <div 
        style={{
          position: 'relative',
          width: isLandscape ? '92vw' : '100%',
          maxWidth: isLandscape ? '960px' : '440px',
          height: isLandscape ? 'auto' : '86vh',
          aspectRatio: isLandscape ? '16/9' : '9/16',
          maxHeight: '90vh',
          background: '#000000',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 25px 70px rgba(0,0,0,0.9), 0 0 0 2px rgba(255,255,255,0.15)',
          transform: 'translate3d(0,0,0)',
          willChange: 'transform'
        }}
      >
        {/* Top Floating Cross / Close Button */}
        <button 
          className="cinema-close-btn" 
          onClick={onClose}
          title="Close Modal (Esc)"
          aria-label="Close"
          style={{ top: '1rem', right: '1rem', zIndex: 50 }}
        >
          <X size={22} />
        </button>

        {/* Video Player Edge-to-Edge with Hardware Accelerated Decoding */}
        <video
          ref={videoRef}
          src={reel.videoUrl}
          autoPlay
          loop
          playsInline
          preload="auto"
          muted={isMuted}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
          style={{
            width: '100%',
            height: '100%',
            objectFit: isLandscape ? 'contain' : 'cover',
            cursor: 'pointer',
            backgroundColor: '#000',
            transform: 'translate3d(0,0,0)',
            willChange: 'transform'
          }}
        />

        {/* Center Pause Indicator */}
        {!isPlaying && (
          <div 
            onClick={togglePlay}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.35)',
              cursor: 'pointer',
              zIndex: 20
            }}
          >
            <div 
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'var(--accent-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px var(--accent-red-glow)'
              }}
            >
              <Play size={32} color="#fff" style={{ marginLeft: '4px' }} />
            </div>
          </div>
        )}

        {/* Bottom Floating Bar */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1.25rem 1.25rem 1rem',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.92))',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            zIndex: 30
          }}
        >
          {/* Timeline Scrubber */}
          <input 
            ref={scrubberRef}
            type="range"
            min={0}
            max={100}
            defaultValue={0}
            onChange={handleSeek}
            style={{
              width: '100%',
              accentColor: '#ff2a4b',
              cursor: 'pointer',
              height: '4px'
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            {/* Audio & Play Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button 
                onClick={togglePlay} 
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button 
                onClick={toggleMute} 
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0 }}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} style={{ color: '#ff2a4b' }} /> : <Volume2 size={20} style={{ color: '#00f0ff' }} />}
              </button>
            </div>

            {/* ONLY ACTION BUTTONS */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              {/* Download Button */}
              <button 
                onClick={handleDownload}
                className="btn-brutal"
                style={{ 
                  background: '#ffffff', 
                  color: '#0c0d10', 
                  padding: '0.55rem 0.95rem',
                  fontSize: '0.82rem',
                  borderRadius: '4px'
                }}
                title="Download video"
              >
                <Download size={16} style={{ color: '#ff2a4b' }} />
                <span>{downloading ? 'Downloading...' : 'Download'}</span>
              </button>

              {/* Copy Link Button */}
              <button 
                onClick={handleCopyLink}
                className="btn-brutal btn-brutal-red"
                style={{ 
                  padding: '0.55rem 0.95rem',
                  fontSize: '0.82rem',
                  borderRadius: '4px'
                }}
                title="Copy shareable link"
              >
                {copied ? <Check size={16} /> : <LinkIcon size={16} />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>

              {/* Owner Delete Button */}
              {onDelete && (
                <button 
                  onClick={onDelete}
                  className="btn-brutal"
                  style={{ 
                    background: 'rgba(255, 42, 75, 0.15)', 
                    color: '#ff2a4b', 
                    borderColor: '#ff2a4b',
                    padding: '0.55rem 0.85rem',
                    fontSize: '0.82rem',
                    borderRadius: '4px'
                  }}
                  title="Delete this reel"
                >
                  <Trash2 size={15} />
                  <span>Delete</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
