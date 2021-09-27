import styled from 'styled-components';
import { $pink, $darkBorder } from '@styles/colors';
import Logo from '@components/logo/logo';
import WalletSVG from '@components/svg/walletSVG';
import Button from '@components/button/button';

const HeaderShell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 47px;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: #1c1c18;
  border-bottom: 1px solid ${$darkBorder};
  padding-right: 16px;
`;

function Header() {
  return (
    <HeaderShell>
      <div>
        <Logo />
      </div>

      <div>
        <Button
          color={$pink}
          label="Connect wallet"
          icon={<WalletSVG />}
        />
      </div>
    </HeaderShell>
  );
}

export default Header;
