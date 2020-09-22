import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Headbar from './Headbar';

function Feed() {
  const { user } = useParams();

  return (
    <Wrapper>
      <Headbar />
      <Main>
        <span>{`${user}'s Feed`}</span>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 20px 40px;
`;

export default Feed;
