import React from 'react';
import styled from 'styled-components';

const Media = ({ xtype, xurl }) => {
  console.log(xtype, xurl);
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export default Media;
