import styled from 'styled-components';

interface ContainerProps {
  isDragging?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;

  background-color: white;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 30px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: relative;
    top: -20px;
    left: 8px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-top: 5px;
  }
`;

interface LabelProps {
  color?: string;
}

export const Label = styled.span<LabelProps>`
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 2px;
  background-color: ${props => props.color || 'black'};
`;
