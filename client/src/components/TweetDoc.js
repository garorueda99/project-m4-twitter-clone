import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../theme';
import { CurrentUserContext } from './CurrentUserContext';

const TweetDoc = () => {
  useEffect(() => {}, []);
  const [numOfLetters, setNumOfLettres] = useState(0);
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <DocWrapper>
      <WritingField>
        <Avatar src={currentUser.profile.avatarSrc} />
        <InputText
          name={'TweetText'}
          placeholder={'What is new?'}
          onChange={(e) => {
            setNumOfLettres(e.target.value.length);
          }}
        ></InputText>
      </WritingField>
      <div>{numOfLetters}</div>
    </DocWrapper>
  );
};

const DocWrapper = styled.div`
  border: 1px solid ${COLORS.line};
  height: 250px;
  padding: 10px;
`;

const WritingField = styled.div`
  display: flex;
  height: 200px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const InputText = styled.textarea`
  margin-left: 5px;
  flex: 1;
  border: none;
  outline: none;
  text-align: top;
`;

export default TweetDoc;
