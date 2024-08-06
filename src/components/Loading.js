import styled from "styled-components";
import Spinner from "../img/spinner.gif";

const Loading = () => {
  return (
    <SpinnerContainer>
      <SpinnerImg src={Spinner} />
    </SpinnerContainer>
  );
};

export default Loading;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100vw;
`;

const SpinnerImg = styled.img`
  width: 130px;
  height: 130px;
`;
