function WalletSVG() {
  return (
    <svg viewBox="0 0 36 35" width="24">
      <path
        className="back"
        d="M3 5.98L23.5.65A2 2 0 0 1 26 2.6v23.53a4 4 0 0 1-2.83 3.83l-15.42 4.7A6 6 0 0 1 0 28.9V9.85a4 4 0 0 1 3-3.87z"
        fill="#ffd848"
      />
      <path
        className="front"
        d="M30.3 35H5.7A5.74 5.74 0 0 1 0 29.22V9s.32 1.9 2.43 2.04H30.3c3.15 0 5.7 2.59 5.7 5.78v12.4c0 3.2-2.55 5.78-5.7 5.78zm-.8-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
        fill="#00d924"
      />
      <g clipPath="url(#wallet_clip)">
        <path
          className="intersection"
          d="M30.3 35H5.7A5.74 5.74 0 0 1 0 29.22V9s.32 1.9 2.43 2.04H30.3c3.15 0 5.7 2.59 5.7 5.78v12.4c0 3.2-2.55 5.78-5.7 5.78zm-.8-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"
          fill="#00a600"
        />
      </g>
      <defs>
        <clipPath id="wallet_clip">
          <path
            d="M3 5.98L23.5.65A2 2 0 0 1 26 2.6v23.53a4 4 0 0 1-2.83 3.83l-15.42 4.7A6 6 0 0 1 0 28.9V9.85a4 4 0 0 1 3-3.87z"
            fill="#ffd848"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default WalletSVG;
