import React from 'react';

export const IDIcon = ({ fill = '#000000', size = 100 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`${3} ${(-25 * size) / 100 + 1.5} ${50 + size / 100} ${50 + size / 100}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44,4H6C4.9,4,4,4.9,4,6v38c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2V6C46,4.9,45.1,4,44,4z M19.5,36H17V14h2.5V36z M34,32.62 c0,1.06-0.03,2.48,0,3.38h-2.5v-1.62c-0.48,1.08-1.39,1.93-3.02,1.93C25.86,36.31,24,33,24,27.88c0-5.51,2.3-7.88,4.7-7.88 c1.12,0,2.18,0.56,2.8,1.87V14H34V32.62z M29.25,22.11c-2.05,0-2.79,2.66-2.79,5.77c0,3.26,0.8,6.38,2.6,6.38 c0.76,0,1.76-0.4,2.3-2.64c0.1-0.28,0.13-0.87,0.13-0.87v-4.56c0-0.32,0.03-0.71,0-1.07C31.36,23.52,30.43,22.11,29.25,22.11z"
        fill={fill}
      />
    </svg>
  );
};