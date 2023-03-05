import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CardsGridProps {
  children?: React.ReactNode | React.ReactNode[];
}

const StyledCardsGrid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
`;

export function CardsGrid(props: CardsGridProps) {
  const { children } = props;
  return <StyledCardsGrid className="grid sm:grid-cols-1 gap-4">{children}</StyledCardsGrid>;
}

export default CardsGrid;
