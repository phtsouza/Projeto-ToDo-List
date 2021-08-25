import { useState } from 'react';
import Modal from 'react-modal';
import { Container, Header, Cancel, Add, Menu , CampInput} from './styles';

export default function NewCategoryModal({setIsOpenNewCategoryModal, isOpenNewCategoryModal}) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

    Modal.setAppElement('#root');

    function handleCloseNewCategoryModal() {
      setIsOpenNewCategoryModal(false);
    }

    function handleTitle(ev) {
      setTitle(ev.target.value);
    }

    function handleColor(ev) {
      console.log(ev.target.value);
      setColor(ev.target.value);
    }

    return (
      <Modal
       isOpen={isOpenNewCategoryModal}
       onRequestClose={handleCloseNewCategoryModal}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
      >
        <Container> 
          <Header> 
            <Cancel onClick={handleCloseNewCategoryModal}>Cancelar</Cancel>
            <Add type="submit">Adicionar</Add>
          </Header>
          <Menu>
            <CampInput>
              <label htmlFor="title">Título</label>
              <input required value={title} onChange={handleTitle} type="text" name="title" id="title" placeholder="adicione um título..."></input>
            </CampInput>
            <CampInput color={color}>
              <label htmlFor="color">Cor</label>
              <input required  value={color} onChange={handleColor} type="color" name="color" id="color"/>
            </CampInput>
          </Menu>
        </Container>
          
      </Modal>
    );
}