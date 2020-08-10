import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '../theme';
import { CurrentUserContext } from './CurrentUserContext';

const TweetDoc = () => {
  const [numOfLetters, setNumOfLetters] = useState(280);
  const { currentUser } = useContext(CurrentUserContext);
  const meowButtonRef = useRef();
  useEffect(() => {
    if (numOfLetters <= 0) {
      meowButtonRef.current.disabled = true;
      meowButtonRef.current.style.background = 'green';
    } else {
      meowButtonRef.current.disabled = false;
      meowButtonRef.current.style.background = COLORS.primary;
    }
  }, [numOfLetters]);
  return (
    <DocWrapper>
      <WritingField>
        <Avatar src={currentUser.profile.avatarSrc} />
        <InputText
          name={'TweetText'}
          placeholder={'What is happening?'}
          onChange={(e) => {
            setNumOfLetters(280 - e.target.value.length);
          }}
        ></InputText>
      </WritingField>
      <InfoBar>
        <MeowCount>{numOfLetters}</MeowCount>
        <MeowButton ref={meowButtonRef} onClick={() => console.log('click')}>
          Meow
        </MeowButton>
      </InfoBar>
    </DocWrapper>
  );
};

const DocWrapper = styled.div`
  border: 1px solid ${COLORS.line};
  height: 280px;
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

const InfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

const InputText = styled.textarea`
  margin-left: 5px;
  flex: 1;
  border: none;
  outline: none;
  text-align: top;
`;

const MeowButton = styled.button`
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  padding: 12px 0;
  appearance: none;
  background: ${COLORS.primary};
  border: none;
  color: white;
  border-radius: 2em;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 0 1em rgba(white, 0.2);
  outline: none;
  width: 100px;
`;

const MeowCount = styled.div`
  margin-right: 15px;
`;

export default TweetDoc;
