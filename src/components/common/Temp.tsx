import styled from 'styled-components';

const TempContainer = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const TempTitle = styled.h1`
  font-size: 2.5rem;
`;

const TempText = styled.p`
  font-size: 0.9rem;
`;

const Temp = () => {
  return (
    <TempContainer>
      <TempTitle>THE MOMENTS</TempTitle>
      <TempText>
        모바일 화면을 지원하지 않습니다. <br /> 데스크탑,노트북을 사용하세요.
      </TempText>
    </TempContainer>
  );
};

export default Temp;
