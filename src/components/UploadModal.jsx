import React, { useState, useEffect } from 'react';
import { X, Upload, Cloud, Film, CheckCircle2, AlertCircle, HelpCircle, HardDrive } from 'lucide-react';
import { uploadToCloudinary, getCloudinaryConfig, saveCloudinaryConfig, saveCustomReel } from '../utils/storage';

export default function UploadModal({ isOpen, onClose, onReelAdded }) {
  const [uploadMode, setUploadMode] = useState('cloudinary'); // Cloudinary is default for permanent storage!
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Promotional');
  const [description, setDescription] = useState('');
  
  // Cloudinary credentials (pre-filled with your Cloud Name)
  const [cloudName, setCloudName] = useState('duwvyiocv');
  const [uploadPreset, setUploadPreset] = useState('ml_default');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [showCloudinaryGuide, setShowCloudinaryGuide] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const cfg = getCloudinaryConfig();
      if (cfg.cloudName) setCloudName(cfg.cloudName);
      if (cfg.uploadPreset) setUploadPreset(cfg.uploadPreset);
      setErrorMsg('');
      setSuccessMsg('');
    }
  }, [isOpen]);

  // Clean up object URL when modal closes or file changes
  useEffect(() => {
    return () => {
      if (videoPreview && videoPreview.startsWith('blob:')) {
        URL.revokeObjectURL(videoPreview);
      }
    };
  }, [videoPreview]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('video/')) {
        setErrorMsg('Please select a valid video file (.mp4, .mov, .webm)');
        return;
      }
      setVideoFile(file);
      setErrorMsg('');
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
      if (!title) {
        // Auto-fill title from filename
        const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
        setTitle(cleanName);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!videoFile) {
      setErrorMsg('Please select a video file from your system.');
      return;
    }

    if (!title.trim()) {
      setErrorMsg('Please enter a title for the reel.');
      return;
    }

    try {
      let finalVideoUrl = '';

      if (uploadMode === 'cloudinary') {
        if (!cloudName.trim() || !uploadPreset.trim()) {
          setErrorMsg('Please provide your Cloud Name and Unsigned Upload Preset for Cloudinary.');
          return;
        }

        setIsUploading(true);
        saveCloudinaryConfig({ cloudName: cloudName.trim(), uploadPreset: uploadPreset.trim() });

        finalVideoUrl = await uploadToCloudinary(
          videoFile, 
          cloudName.trim(), 
          uploadPreset.trim(), 
          (percent) => setUploadProgress(percent)
        );
      } else {
        // Local mode: use object URL & local playback
        finalVideoUrl = videoPreview;
      }

      const newReel = {
        id: `reel-user-${Date.now()}`,
        title: title.trim(),
        category: category,
        tag: `${category.toUpperCase()} REEL`,
        description: description.trim() || `Custom edit by Piyush Mittal uploaded in ${category} category with CapCut.`,
        videoUrl: finalVideoUrl,
        duration: "0:25",
        hookRate: "94% Hook",
        pacing: "Dynamic Beat",
        toolsUsed: ["CapCut Native", "Sound Edits", "Custom Cut"]
      };

      saveCustomReel(newReel);
      onReelAdded(newReel);

      setSuccessMsg(uploadMode === 'cloudinary' 
        ? 'Video successfully uploaded to Cloudinary and added to your portfolio!' 
        : 'Video loaded from PC and added to your showcase!');

      setTimeout(() => {
        onClose();
      }, 1500);

    } catch (err) {
      setErrorMsg(err.message || 'An error occurred during upload.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div 
      className="cinema-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget && !isUploading) onClose();
      }}
    >
      <div 
        style={{
          position: 'relative',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          background: '#0c0d10',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '16px',
          padding: '2.2rem',
          boxShadow: 'var(--shadow-brutal-lg)',
          color: '#ffffff',
          overflowY: 'auto'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="cinema-close-btn"
          style={{ top: '1.2rem', right: '1.2rem' }}
          disabled={isUploading}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="badge-tag badge-red">
              <Upload size={12} />
              SYSTEM VIDEO UPLOADER
            </span>
          </div>
          <h3 className="font-display" style={{ fontSize: '1.9rem', color: '#ffffff', lineHeight: 1.1 }}>
            UPLOAD REEL FROM YOUR SYSTEM
          </h3>
          <p style={{ color: '#aaa', fontSize: '0.86rem', marginTop: '0.3rem' }}>
            Upload your CapCut video edits directly into the portfolio's sliding showcase.
          </p>
        </div>

        {/* Upload Mode Selector: Local vs Cloudinary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <button
            type="button"
            onClick={() => setUploadMode('local')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem',
              background: uploadMode === 'local' ? '#1c202d' : '#14161f',
              border: uploadMode === 'local' ? '2px solid #ff2a4b' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#ffffff',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            <HardDrive size={16} color={uploadMode === 'local' ? '#ff2a4b' : '#888'} />
            <span>Instant PC Upload</span>
          </button>

          <button
            type="button"
            onClick={() => setUploadMode('cloudinary')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.85rem',
              background: uploadMode === 'cloudinary' ? '#1c202d' : '#14161f',
              border: uploadMode === 'cloudinary' ? '2px solid #00f0ff' : '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#ffffff',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            <Cloud size={16} color={uploadMode === 'cloudinary' ? '#00f0ff' : '#888'} />
            <span>Cloudinary (Permanent Cloud)</span>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* Cloudinary Fields (When Cloudinary Mode is active) */}
          {uploadMode === 'cloudinary' && (
            <div 
              style={{ 
                background: 'rgba(0, 240, 255, 0.05)', 
                border: '1px solid rgba(0, 240, 255, 0.25)', 
                borderRadius: '8px', 
                padding: '1.2rem', 
                marginBottom: '1.25rem' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <span className="font-mono" style={{ fontSize: '0.8rem', color: '#00f0ff', fontWeight: 700 }}>
                  CLOUDINARY CREDENTIALS (NO BACKEND NEEDED)
                </span>
                <button
                  type="button"
                  onClick={() => setShowCloudinaryGuide(!showCloudinaryGuide)}
                  style={{ background: 'none', border: 'none', color: '#ffdf00', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <HelpCircle size={14} />
                  <span>{showCloudinaryGuide ? 'Hide Guide' : 'How to get keys?'}</span>
                </button>
              </div>

              {showCloudinaryGuide && (
                <div style={{ background: '#11141c', padding: '0.9rem', borderRadius: '6px', fontSize: '0.78rem', color: '#ccc', marginBottom: '1rem', lineHeight: 1.5 }}>
                  <strong style={{ color: '#fff' }}>How to get free Cloudinary keys (2 mins):</strong>
                  <ol style={{ paddingLeft: '1.2rem', marginTop: '0.4rem' }}>
                    <li>Create a free account at <strong>cloudinary.com</strong>.</li>
                    <li>Copy your <strong>Cloud Name</strong> from the dashboard.</li>
                    <li>Go to <strong>Settings (Gear icon) → Upload → Upload Presets</strong>.</li>
                    <li>Click <strong>Add upload preset</strong>, change "Signing Mode" to <strong>Unsigned</strong>, and Save.</li>
                    <li>Paste the Preset Name below! React uploads directly.</li>
                  </ol>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#aaa', marginBottom: '0.3rem' }}>Cloud Name</label>
                  <input
                    type="text"
                    placeholder="e.g. piyush_edits"
                    value={cloudName}
                    onChange={(e) => setCloudName(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem', background: '#0c0d10', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '4px', fontSize: '0.82rem' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#aaa', marginBottom: '0.3rem' }}>Upload Preset (Unsigned)</label>
                  <input
                    type="text"
                    placeholder="e.g. portfolio_reels"
                    value={uploadPreset}
                    onChange={(e) => setUploadPreset(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem', background: '#0c0d10', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '4px', fontSize: '0.82rem' }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* File Picker Drag & Drop Box */}
          <div 
            style={{ 
              border: '2px dashed rgba(255, 255, 255, 0.25)', 
              borderRadius: '10px', 
              padding: '1.75rem', 
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.02)',
              marginBottom: '1.25rem',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('reel-file-input').click()}
          >
            <input 
              id="reel-file-input"
              type="file" 
              accept="video/mp4,video/quicktime,video/webm"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            
            <div style={{ width: '48px', height: '48px', margin: '0 auto 0.75rem', borderRadius: '50%', background: 'rgba(255,42,75,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Film size={24} style={{ color: '#ff2a4b' }} />
            </div>

            {videoFile ? (
              <div>
                <span style={{ color: '#38ef7d', fontWeight: 700, fontSize: '0.95rem' }}>✓ Selected: {videoFile.name}</span>
                <p style={{ color: '#888', fontSize: '0.78rem', marginTop: '0.2rem' }}>{(videoFile.size / (1024 * 1024)).toFixed(2)} MB • Click to change</p>
              </div>
            ) : (
              <div>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff' }}>Choose Video from your PC</span>
                <p style={{ color: '#888', fontSize: '0.78rem', marginTop: '0.3rem' }}>MP4, MOV, or WEBM (Vertical 9:16 recommended)</p>
              </div>
            )}
          </div>

          {/* Reel Meta Fields */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0.8rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#aaa', marginBottom: '0.3rem' }}>Reel Title</label>
              <input
                type="text"
                placeholder="e.g. Nike Kinetic Spec Ad"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: '#161922', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '4px', fontSize: '0.85rem' }}
                required
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#aaa', marginBottom: '0.3rem' }}>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: '#161922', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '4px', fontSize: '0.85rem' }}
              >
                <option value="Promotional">Promotional</option>
                <option value="Branding">Branding</option>
                <option value="Podcast">Podcast</option>
                <option value="Event">Event</option>
                <option value="Showcase">Showcase</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#aaa', marginBottom: '0.3rem' }}>Edit Notes / Sound Edits details</label>
            <input
              type="text"
              placeholder="e.g. Aggressive 0.5s hook, beat drops, whoosh sound edits in CapCut"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ width: '100%', padding: '0.65rem', background: '#161922', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '4px', fontSize: '0.85rem' }}
            />
          </div>

          {/* Upload Progress Bar (Cloudinary) */}
          {isUploading && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#00f0ff', marginBottom: '0.3rem' }}>
                <span>Uploading to Cloudinary...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${uploadProgress}%`, height: '100%', background: '#00f0ff', transition: 'width 0.2s ease' }}></div>
              </div>
            </div>
          )}

          {/* Feedback messages */}
          {errorMsg && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,42,75,0.15)', border: '1px solid #ff2a4b', color: '#ff2a4b', padding: '0.7rem', borderRadius: '6px', fontSize: '0.8rem', marginBottom: '1rem' }}>
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(56,239,125,0.15)', border: '1px solid #38ef7d', color: '#38ef7d', padding: '0.7rem', borderRadius: '6px', fontSize: '0.8rem', marginBottom: '1rem' }}>
              <CheckCircle2 size={16} />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isUploading}
            className="btn-brutal btn-brutal-red"
            style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
          >
            {isUploading ? (
              <span>Uploading Video... {uploadProgress}%</span>
            ) : (
              <span>Add Reel to Showcase</span>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
