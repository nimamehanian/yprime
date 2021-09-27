import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $gold, $text } from '@styles/colors';

interface ISCButton {
  readonly isDisabled?: boolean;
  readonly color?: string;
}

const ButtonShell = styled.div<ISCButton>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  height: 32px;
  font-size: 16px;
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  background: ${({ isDisabled, color }) => isDisabled ? `${color}66` : color};
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 252ms cubic-bezier(0.83, 0, 0.17, 1);
  &:hover {
    ${({ isDisabled, color }) => isDisabled ? '' : `
    background: ${color}cc;
    `}
  }

  font-family: 'Inter Med', sans-serif;
  width: 150px;
  padding: 0px 16px;
  color: ${$text};

`;

interface IButton {
  onClickHandler?: any;
  isDisabled?: boolean;
  color?: string;
  label?: string;
  icon?: any;
}

function Button({ onClickHandler, isDisabled, color, label, icon }: IButton): JSX.Element {
  return (
    <ButtonShell
      onClick={isDisabled ? () => ({}) : onClickHandler}
      isDisabled={isDisabled}
      color={color}
    >
      {label}
      {icon}
    </ButtonShell>
  );
}

Button.defaultProps = {
  onClickHandler: () => ({}),
  isDisabled: false,
  label: 'Hello, Label.',
  color: $gold,
};

Button.propTypes = {
  onClickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
