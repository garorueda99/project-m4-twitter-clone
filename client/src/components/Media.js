import React from 'react';
import styled from 'styled-components';

const Media = ({ url }) => {
  return <>{!!url && <Image src={url} alt={'User Tweet Image'} />}</>;
};

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export default Media;
