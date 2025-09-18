import React from "react";

const GlassSpinnerLoader = ({ size = 48 }) => (
  <div style={{
    display: "inline-block",
    width: size,
    height: size,
    position: "relative",
    filter: "drop-shadow(0 4px 16px rgba(37, 99, 235, 0.15))",
  }}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="glass-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#1e40af" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="glass-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="url(#glass-bg)"
        strokeWidth="4"
        fill="none"
      />
      
      {/* Animated spinner */}
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke="url(#glass-gradient)"
        strokeWidth="4"
        strokeDasharray="90 20"
        strokeLinecap="round"
        fill="none"
        style={{
          transformOrigin: "center",
          animation: "glass-spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite"
        }}
      />
      
      {/* Inner glow effect */}
      <circle
        cx="24"
        cy="24"
        r="12"
        fill="url(#glass-gradient)"
        opacity="0.1"
        style={{
          animation: "glass-pulse 2s ease-in-out infinite"
        }}
      />
      
      <style>{`
        @keyframes glass-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes glass-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </svg>
  </div>
);

export default GlassSpinnerLoader;
