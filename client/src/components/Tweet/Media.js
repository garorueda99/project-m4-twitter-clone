import React from 'react';
import styled from 'styled-components';

const Media = ({ type, url }) => {
  console.log(!!type, url);
  return <Wrapper>{!!type && <Image src={url} alt={type} />}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: fit-content;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 600px;
  border-radius: 5px;
`;

export default Media;
