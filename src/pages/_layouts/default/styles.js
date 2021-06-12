import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  z-index: 1;

  background: #000;

  box-sizing: border-box !important;
  
  * {
    box-sizing: border-box !important;
  }

  @media (max-width: 450px) {
    height: calc(100vh - 53px);
  }
`;
