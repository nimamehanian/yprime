import styled from 'styled-components';
import { $pink } from '@styles/colors';
import { motion } from 'framer-motion';
import { jsxKeyGen } from '@utils/jsxKeyGen';

const Toggler = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 126px;
  height: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
  background: ${$pink};
`;

const Bars = styled.div`
  width: 40px;
`;

const Bar = styled(motion.div)`
  display: block;
  background-color: #f5f7f9;
  height: 2px;
  margin: 8px 0px;
`;

const bar1 = {
  shut: { opacity: 1, y: 0 },
  open: { opacity: 0, y: -10 },
};

const bar2 = {
  shut: { rotate: 0 },
  open: { rotate: -315 },
};

const bar3 = {
  shut: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -10 },
};

const physics = { type: 'spring', mass: 1, stiffness: 360, damping: 36 };

interface IHam { isOpen: boolean; }

function Hamburger({ isOpen }: IHam) {
  return (
    <Toggler>
      <Bars>
        {[bar1, bar2, bar3].map(states => (
          <Bar
            animate={isOpen ? 'open' : 'shut'}
            transition={physics}
            variants={states}
            key={jsxKeyGen('bar')}
          />
        ))}
      </Bars>
    </Toggler>
  );
}

export default Hamburger;
