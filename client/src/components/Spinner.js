import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';
import { COLORS } from '../theme';

const Spinner = ({ size }) => {
  return (
    <Wrapper>
      <SpinImg size={size} color={COLORS.primary} />
      <div> LOADING...</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spin = keyframes`
from{
  transform: rotate(0deg)
}to{
  transform: rotate(360deg)
}`;

const SpinImg = styled(FiLoader)`
  animation: ${Spin} 1300ms linear infinite;
`;

export default Spinner;
