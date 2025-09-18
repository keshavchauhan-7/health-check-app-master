import React from "react";

const GlassSandClockLoader = ({ size = 48 }) => (
  <div style={{
    display: "inline-block",
    width: size,
    height: size,
    position: "relative",
    filter: "drop-shadow(0 2px 8px rgba(60,60,90,0.10))",
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
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e7ef" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e42" />
        </linearGradient>
      </defs>
      {/* Glass outline */}
      <path
        d="M12 6 Q24 18 12 42 Q24 30 36 42 Q24 18 36 6 Q24 18 12 6 Z"
        fill="url(#glass)"
        stroke="#94a3b8"
        strokeWidth="2"
      />
      {/* Sand top (animated) */}
      <ellipse
        cx="24"
        cy="18"
        rx="7"
        ry="3"
        fill="url(#sand)"
      >
        <animate
          attributeName="ry"
          values="3;0;3"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </ellipse>
      {/* Sand bottom (animated) */}
      <ellipse
        cx="24"
        cy="30"
        rx="7"
        ry="0"
        fill="url(#sand)"
      >
        <animate
          attributeName="ry"
          values="0;3;0"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </ellipse>
      {/* Falling sand */}
      <rect
        x="22.5"
        y="18"
        width="3"
        height="12"
        rx="1.5"
        fill="#fbbf24"
      >
        <animate
          attributeName="height"
          values="12;0;12"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
);

export default GlassSandClockLoader;
