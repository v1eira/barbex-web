import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #202028;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NewBarbershopButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 50px;
  align-self: center;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  border-radius: 12px;

  display: ${(props) => (!props.hasBarbershop ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  opacity: 0.8;

  svg {
    font-size: 18px;
    color: #ff7b00;
  }

  transition: 0.3s;

  &:hover {
    opacity: 1;
    background: #000;

    span {
      color: #fff;
    }
  }
`;

export const ActionButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0.8;

  svg {
    font-size: 18px;
    color: #ff7b00;
  }

  transition: 0.3s;

  &:hover {
    opacity: 1;
    background: #000;

    span {
      color: #ff7b00;
      transition: 0.3s;
    }
  }
`;

export const ButtonLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ececec;
`;

export const BarbershopSpecs = styled.div`
  display: ${(props) => (props.hasBarbershop ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  margin: 0 25px;
`;

export const BarbershopHeader = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: unset;
    margin-top: 10px;
  }
`;

export const BarbershopTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ddd;

  min-width: 200px;
`;

export const BarbershopButtons = styled.div`
  display: flex;

  button + button {
    margin-left: 15px;
  }

  @media (max-width: 1015px) {
    button {
      max-width: 120px;

      span {
        font-size: 11px;
      }
    }
  }

  @media (max-width: 600px) {
    button {
      max-width: 120px;

      span {
        font-size: 11px;
      }
    }
  }
`;

export const BarbershopAddress = styled.span``;

export const Sections = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SectionList = styled.div``;

export const Title = styled.span`
  color: #fff;
  font-size: 16px;
`;

export const List = styled.table``;
