import styled from 'styled-components';
import { $gold } from '@styles/colors';
import { alpha } from '@styles/mixins';

const LogoShell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${alpha('#fff', 4)};
  padding: 0px 16px 0px 19px;
`;

function Logo() {
  return (
    <LogoShell>
      <svg
        width="22"
        height="22"
        viewBox="0 0 135 145"
        fill="none"
      >
        <path
          d="M100.986 0L0 144.988H31.0048L132.514 0H100.986Z"
          fill={$gold}
        />
        <path
          d="M34.2346 0L63.9475 42.7232L48.4451 66.0268L2.58386 0H34.2346Z"
          fill="url(#inner_shadow)"
        />
        <defs>
          <linearGradient
            id="inner_shadow"
            x1="27.1293"
            y1="9.0625"
            x2="69.773"
            y2="60.4324"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={$gold} />
            <stop stopColor={$gold} stopOpacity="0.55" offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </LogoShell>
  );
}

export default Logo;
