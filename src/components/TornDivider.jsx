import React from 'react';

export default function TornDivider({ light = false, inverted = false }) {
  return (
    <div 
      className={inverted ? "torn-divider-bottom" : "torn-divider-top"} 
      style={{ 
        width: '100%', 
        overflow: 'hidden', 
        lineHeight: 0, 
        zIndex: 20 
      }}
    >
      <svg 
        viewBox="0 0 1200 60" 
        preserveAspectRatio="none" 
        className={`torn-divider-svg ${light ? 'light' : ''}`}
        style={{ width: '100%', height: '44px', display: 'block' }}
      >
        <path 
          d="M0,0 L0,35 Q30,12 60,38 Q120,55 180,24 Q240,48 300,18 Q360,52 420,28 Q480,45 540,16 Q600,50 660,22 Q720,44 780,18 Q840,48 900,26 Q960,42 1020,15 Q1080,48 1140,25 L1200,38 L1200,60 L0,60 Z"
          fill={light ? "var(--bg-paper)" : "#0c0d10"}
        />
      </svg>
    </div>
  );
}
