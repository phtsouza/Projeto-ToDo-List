import Modal from 'react-modal';
// import { Container } from './styles';

export default function NewTaskModal({isNewTaskModalOpen, setNewTaskModalOpen}) {

  Modal.setAppElement('#root');

  function handleCloseNewTaskModal() {
    setNewTaskModalOpen(false);
  }

  return (
    <Modal 
      isOpen={isNewTaskModalOpen}
      onRequestClose={handleCloseNewTaskModal}
    >
      <h2>Modal</h2>
    </Modal>
  );
}