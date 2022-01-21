import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Center = styled.div`
  max-width: 450px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  header {
    display: flex;
    align-self: center;
    align-items: center;
    width: 100%;
    justify-content: center;
    
    button {
      border: 0;
      background: 0;
    }
    
    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  
  ul {
    width: 80%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const DatepickerToggle = styled.span`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  margin-bottom: 2px;

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    box-sizing: border-box;
  }

  input::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export const Time = styled.li`
  width: 100%;
  background: #333;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 20px;
  border-radius: 4px;
  opacity: ${props => (props.past ? 0.3 : 1)};
  list-style-type: none;
  align-items: center;

  svg {
    cursor: pointer;
    display: ${props => (props.past || props.available ? 'none' : 'block')} !important;
  }
`;

export const Info = styled.div`
  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#ff7b00')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#fff')};
  }
`;
