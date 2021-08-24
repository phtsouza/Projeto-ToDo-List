import { useState } from 'react';
import Modal from 'react-modal';
import SingleCategory from './SingleCategory'
import { Container, Header, Cancel, Add, Menu, CampInput, CampCategory } from './styles';
import { useSelector } from 'react-redux';

export default function NewTaskModal({isNewTaskModalOpen, setNewTaskModalOpen}) {

  Modal.setAppElement('#root');

  const allCategories = useSelector((state) => state.categories);
  const [categories, setCategories] = useState(allCategories);

  function handleCloseNewTaskModal() {
    setNewTaskModalOpen(false);
  }

  return (
    <Modal 
      isOpen={isNewTaskModalOpen}
      onRequestClose={handleCloseNewTaskModal}
    >
      <Container>
        <Header>
          <Cancel onClick={handleCloseNewTaskModal}>Cancelar</Cancel>
          <Add type="submit">Adicionar</Add>
        </Header>
        <Menu>
          <CampInput>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" id="title" placeholder="adicione um título..."></input>
          </CampInput>
          <CampInput>
            <label htmlFor="description">Descrição</label>
            <textarea name="description" id="description" placeholder="adicione uma descrição..."></textarea>
          </CampInput>
          <CampCategory>
            {categories.map((ct, i) => <SingleCategory category={ct} key={i}/>)}
          </CampCategory>
          
        </Menu>
      </Container>
    </Modal>
  );
}