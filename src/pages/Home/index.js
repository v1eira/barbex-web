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
  BarbershopButtons } from './styles';

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
      </BarbershopSpecs>
    </Container>
  );
}

export default Home;