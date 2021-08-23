import React from 'react';
import Add from '../Svgs/Add';
import { Container, Title } from './styles';

export default function Header() {
  return (
    <Container>
        <Title>todo</Title>
        <Add />
    </Container>
  );
}