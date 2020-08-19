import React from 'react';
import styled, { keyframes } from 'styled-components';
import Particle from './Particle';
const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `;

let size = Math.floor(Math.random() * 12);

const ConfettiPiece = ({ angle, distance, color }) => {
  return (
    <CenteredInsideParent>
      <Particle angle={angle} distance={Math.floor(Math.random() * distance)}>
        <Circle
          style={{
            backgroundColor: color[Math.floor(Math.random() * color.length)],
          }}
        />
      </Particle>
    </CenteredInsideParent>
  );
};

const Circle = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  opacity: 0;
  animation: ${fadeOut} 650ms ease-out;
`;

const CenteredInsideParent = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default ConfettiPiece;
