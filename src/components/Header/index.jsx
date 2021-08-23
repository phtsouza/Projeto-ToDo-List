import React from 'react';
import Add from '../Svgs/Add';
import Modal from 'react-modal';
import { Container, Title } from './styles';
import { useState } from 'react';

Modal.setAppElement('#root');

export default function Header() {
  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setNewTaskModalOpen(false);
  }

  return (
    <Container>
        <Title>todo</Title>
        <Add className="button-add" onClick={handleOpenNewTaskModal} />
        <Modal 
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewTaskModal}
        >
          <h2>Modal</h2>
        </Modal>
    </Container>
  );
}