import React, { useState } from 'react';

import { FaPlusCircle } from 'react-icons/fa';
import AddBarberModal from '../../components/AddBarberModal';
import AddServiceModal from '../../components/AddServiceModal';

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

  function openModal(e, id) {
    e.preventDefault();
    document.getElementById(id).style.display = 'block';
    e.stopPropagation();
  }

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
            <ActionButton onClick={(e) => openModal(e, 'barber')}>
              <FaPlusCircle />
              <ButtonLabel>Adicionar Barbeiro</ButtonLabel>
              <AddBarberModal name="Barbeiro" id="barber" />
            </ActionButton>

            <ActionButton onClick={(e) => openModal(e, 'service')}>
              <FaPlusCircle />
              <ButtonLabel>Adicionar Serviço</ButtonLabel>
              <AddServiceModal name="Serviço" id="service" />
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
