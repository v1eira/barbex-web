import React, { useState } from 'react';

import { FaPlusCircle } from 'react-icons/fa';

import {
  Container,
  NewBarbershopButton,
  ActionButton,
  ButtonLabel,
  BarbershopSpecs,
  BarbershopHeader,
  BarbershopTitle,
  BarbershopButtons,
  BarbershopAddress,
  Sections,
  SectionList,
  Title,
  List } from './styles';

function Home() {
  const [hasBarbershop, setHasBarbershop] = useState(true);

  return (
    <Container>
      <NewBarbershopButton hasBarbershop={hasBarbershop}>
        <FaPlusCircle />
        <ButtonLabel>Cadastrar Barbearia</ButtonLabel>
      </NewBarbershopButton>

      <BarbershopSpecs hasBarbershop={hasBarbershop}>
        <BarbershopHeader>
          <BarbershopTitle>Barbearia XYZ</BarbershopTitle>

          <BarbershopButtons>
            <ActionButton>
              <FaPlusCircle />
              <ButtonLabel>Adicionar Barbeiro</ButtonLabel>
            </ActionButton>

            <ActionButton>
              <FaPlusCircle />
              <ButtonLabel>Adicionar Serviço</ButtonLabel>
            </ActionButton>
          </BarbershopButtons>
        </BarbershopHeader>

        <BarbershopAddress>Avenida X, 1234</BarbershopAddress>

        <Sections>
          <SectionList>
            <Title>Barbeiros</Title>

            <List></List>
          </SectionList>

          <SectionList>
            <Title>Serviços</Title>

            <List></List>
          </SectionList>
        </Sections>
        
      </BarbershopSpecs>
    </Container>
  );
}

export default Home;