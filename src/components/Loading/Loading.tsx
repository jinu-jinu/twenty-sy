import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { state } from '../Store/store';
import React from 'react';

const LoadingContainer = styled.section`
  position: relative;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingTitleWrapper = styled.div`
  text-align: center;
`;

const LoadingTitleText = styled.h1`
  font-size: 3rem;
`;

const LoadingProgress = styled.p`
  font-weight: bold;
`;

const Loading = () => {
  const { loadedVideoCount } = useSnapshot(state);

  return (
    <LoadingContainer>
      <LoadingTitleWrapper>
        <LoadingTitleText>LOADING</LoadingTitleText>
        <LoadingProgress>{Math.round((loadedVideoCount / 6) * 100)}%</LoadingProgress>
      </LoadingTitleWrapper>
    </LoadingContainer>
  );
};

export default React.memo(Loading);
