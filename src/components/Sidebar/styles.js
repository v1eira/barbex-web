import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: ${(props) => (props.showSideBar ? '16%' : '0px')};
  min-width: ${(props) => (props.showSideBar ? '200px' : 'none')};
  height: 100%;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #000;
  
  img {
    margin-top: 50px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const NavigationButtons = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 130px;
    margin-bottom: 30px;
  }
`;

export const NavButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
  padding: 5px;
  align-items: center;
  
  display: flex;

  transition: 0.2s background;

  svg {
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #ff7b00;
    opacity: 0.5;

    transition: 0.2s opacity;
  }

  .focused {
    opacity: 1;
  }

  &:hover {
    span, svg {
      opacity: 1;
    }
  }
`;

export const ButtonLabel = styled.span`
  font-size: 14px;
  color: #fff;
  margin-left: 15px;

  .focused {
    opacity: 1;
  }

  opacity: 0.5;
`;

export const Badge = styled(NavButton)`
  position: relative;

  &::after {
    display: ${(props) => (props.hasUnread ? 'block' : 'none')};
    top: 8px;
    right: 8px;
    position: absolute;
    width: 19px;
    background: #ff892e;
    content: '${(props) => props.content}';
    font-size: 10px;
    font-weight: bold;
    padding: 4px 0;
    color: #fff;
    border-radius: 50%;
  }
`;
