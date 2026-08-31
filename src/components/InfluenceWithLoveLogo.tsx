import React from 'react';

interface InfluenceWithLoveLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const InfluenceWithLoveLogo: React.FC<InfluenceWithLoveLogoProps> = ({
  className = 'h-16 w-auto',
  variant = 'color'
}) => {
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <svg
        viewBox="0 0 280 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-24 object-contain drop-shadow-md"
      >
        {/* Top "INFLUENCE" with human figure for 'I' */}
        <g>
          {/* Human Head (Red Circle) */}
          <circle cx="12" cy="12" r="5" fill="#E51937" />
          {/* Human Body / Arms (Red Stylized Y/V Shape) */}
          <path
            d="M5 21 C8 24, 16 24, 19 21 L13.5 35 L10.5 35 Z"
            fill="#E51937"
          />
          {/* NFLUENCE text */}
          <text
            x="24"
            y="32"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Barlow', 'Helvetica', sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="2"
          >
            NFLUENCE
          </text>
        </g>

        {/* Red Ribbon with "WITH" */}
        <g transform="translate(0, 40)">
          {/* Red Ribbon Bar */}
          <path
            d="M0 0 L270 0 L260 22 L0 22 Z"
            fill="#E51937"
          />
          {/* "WITH" in bold white */}
          <text
            x="95"
            y="17"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Barlow', 'Helvetica', sans-serif"
            fontWeight="800"
            fontSize="16"
            letterSpacing="4"
          >
            WITH
          </text>
        </g>

        {/* Bottom "LOVE .org" */}
        <g transform="translate(0, 68)">
          {/* Letter L */}
          <text
            x="5"
            y="42"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Barlow', 'Helvetica', sans-serif"
            fontWeight="900"
            fontSize="50"
          >
            L
          </text>

          {/* Stylized Red Heart for 'O' */}
          <path
            d="M52 14 C52 7, 60 2, 68 2 C76 2, 82 8, 85 14 C88 8, 94 2, 102 2 C110 2, 118 7, 118 14 C118 28, 95 44, 85 49 C75 44, 52 28, 52 14 Z"
            fill="#E51937"
          />
          <path
            d="M62 14 C62 9, 68 5, 74 5 C80 5, 85 9, 85 15 C85 9, 90 5, 96 5 C102 5, 108 9, 108 14 C108 23, 93 34, 85 38 C77 34, 62 23, 62 14 Z"
            fill="#08162F"
          />

          {/* Letter V */}
          <text
            x="122"
            y="42"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Barlow', 'Helvetica', sans-serif"
            fontWeight="900"
            fontSize="50"
          >
            V
          </text>

          {/* Letter E */}
          <text
            x="165"
            y="42"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Barlow', 'Helvetica', sans-serif"
            fontWeight="900"
            fontSize="50"
          >
            E
          </text>

          {/* .org badge */}
          <rect x="210" y="24" width="48" height="18" rx="3" fill="#08162F" stroke="#E51937" strokeWidth="1.5" />
          <text
            x="215"
            y="37"
            fill="#FFFFFF"
            fontFamily="'Montserrat', 'Barlow', 'Helvetica', sans-serif"
            fontWeight="700"
            fontSize="12"
          >
            .org
          </text>
        </g>
      </svg>
    </div>
  );
};
