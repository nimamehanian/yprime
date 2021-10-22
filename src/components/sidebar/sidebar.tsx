import { useReducer } from 'react';
import styled from 'styled-components';
import { disableHighlight } from '@styles/mixins';
import Hamburger from '@components/hamburger/hamburger';
import { motion } from 'framer-motion';
import { $ANIMATION_PHYSICS } from '@styles/constants';

const SidebarPanel = styled(motion.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 61.8%;
  max-width: 314px;
  padding-top: 126px;
  background: #45816f;
  z-index: 3;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  ${disableHighlight}
`;

const variants = {
  shut: { x: '97%' },
  peek: { x: '94%' },
  open: { x: '0%' },
};

const initialState = {
  isOpen: false,
  isPeeking: false,
};

interface IState {
  isOpen: boolean;
  isPeeking: boolean;
}

type IAction =
  | { type: 'open' }
  | { type: 'shut' }
  | { type: 'peek' }
  | { type: 'tuck' };

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'open':
      return { ...state, isOpen: true };
    case 'shut':
      return { ...state, isOpen: false };
    case 'peek':
      return { ...state, isPeeking: true };
    case 'tuck':
      return { ...state, isPeeking: false };
    default:
      console.log('GO FUCK YOURSELF');
      return state;
  }
}

function Sidebar() {
  const [{ isOpen, isPeeking }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div
        onClick={() => (isOpen ?
          dispatch({ type: 'shut' }) :
          dispatch({ type: 'open' })
        )}
        onMouseEnter={() => dispatch({ type: 'peek' })}
        onMouseLeave={() => dispatch({ type: 'tuck' })}
      >
        <Hamburger isOpen={isOpen} />
      </div>
      <SidebarPanel
        animate={isOpen ? 'open' : (isPeeking ? 'peek' : 'shut')}
        transition={$ANIMATION_PHYSICS}
        variants={variants}
      >
      </SidebarPanel>
    </>
  );
}

export default Sidebar;
