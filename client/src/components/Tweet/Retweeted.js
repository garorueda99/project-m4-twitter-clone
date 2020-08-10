import React from 'react';
import styled from 'styled-components';
import { AiOutlineRetweet } from 'react-icons/ai';

const Retweeted = ({ from }) => {
  const iconStyle = { margin: '0 10px' };
  return (
    <>
      {from && (
        <State>
          <AiOutlineRetweet style={iconStyle} />
          {from}
        </State>
      )}
    </>
  );
};

const State = styled.div`
  color: gray;
  font-size: 0.85rem;
  margin: 10px 5.5px;
  &::after {
    content: ' Remeowed';
  }
`;
export default Retweeted;
