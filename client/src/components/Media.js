import React from 'react';
import styled from 'styled-components';

const Media = ({ type, url }) => {
  console.log(!!type, url);
  return <>{!!type && <Image src={url} alt={type} />}</>;
};

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export default Media;
