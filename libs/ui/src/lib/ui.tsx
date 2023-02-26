import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiProps {}

const StyledUi = styled.div`
  color: pink;
`;

export function Ui(props: UiProps) {
  return (
    <StyledUi className="bg-slate-600">
      <h1 className="text-primary">Welcome to Ui! 2</h1>
      <button className="btn-blue">hm</button>
    </StyledUi>
  );
}

export default Ui;
