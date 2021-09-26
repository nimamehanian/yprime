import styled from 'styled-components';

const SidebarShell = styled.div`
  width: 280px;
  position: absolute;
  top: 48px;
  left: 0px;
  bottom: 0px;
`;

function Sidebar() {
  return (
    <SidebarShell>SIDEBAR</SidebarShell>
  );
}

export default Sidebar;
