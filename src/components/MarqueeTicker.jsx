import React from 'react';

export default function MarqueeTicker() {
  const itemsTop = [
    "PIYUSH MITTAL",
    "REEL EDITOR",
    "SHORT-FORM SPECIALIST",
    "SOUND EDITS",
    "RETENTION HOOKS",
    "DYNAMIC PACING",
    "CLEAN CUTS"
  ];

  const itemsBottom = [
    "PROMOTIONAL REELS",
    "BRANDING REELS",
    "PODCAST REELS",
    "EVENT GLIMPSES",
    "SHOWCASE REELS",
    "BEAT SYNC",
    "SPEED RAMPING"
  ];

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0', background: '#0c0d10' }}>
      
      {/* Top Banner (Horizontal White/Red on Black) */}
      <div className="marquee-container" style={{ padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="marquee-content">
          {[...itemsTop, ...itemsTop, ...itemsTop].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span 
                className="font-display" 
                style={{ 
                  fontSize: '1.45rem', 
                  color: '#ffffff', 
                  letterSpacing: '0.04em' 
                }}
              >
                {item}
              </span>
              <span style={{ color: '#ff2a4b', fontSize: '1.2rem' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Reverse Banner (Red Accent on Deep Charcoal) */}
      <div className="marquee-container" style={{ padding: '0.6rem 0', background: '#14161f' }}>
        <div className="marquee-content reverse">
          {[...itemsBottom, ...itemsBottom, ...itemsBottom].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span 
                className="font-display" 
                style={{ 
                  fontSize: '1.35rem', 
                  color: '#ff2a4b', 
                  letterSpacing: '0.04em' 
                }}
              >
                {item}
              </span>
              <span style={{ color: '#00f0ff', fontSize: '1.2rem' }}>❖</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
