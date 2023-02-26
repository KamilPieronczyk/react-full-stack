import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

export function Ui(props: UiProps) {
  return (
    <StyledUi>
      <h1>Welcome to Ui! 2</h1>
      <button>hm</button>
    </StyledUi>
  );
}

export default Ui;
