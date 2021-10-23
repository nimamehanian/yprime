import styled from 'styled-components';
import { motion } from 'framer-motion';
import { $ANIMATION_PHYSICS } from '@styles/constants';

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

type IHam = {
  isOpen: boolean,
};

function Hamburger({ isOpen }: IHam) {
  return (
    <Toggler>
      <Bars>
        {[bar1, bar2, bar3].map((states, idx) => (
          <Bar
            animate={isOpen ? 'open' : 'shut'}
            transition={$ANIMATION_PHYSICS}
            variants={states}
            key={`bar_${idx + 1}`}
          />
        ))}
      </Bars>
    </Toggler>
  );
}

export default Hamburger;
