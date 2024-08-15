import React, { useState } from 'react';
import Modal from './components/Modal';

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <div className="App">
            <button type="button" className="modal-open-button btn btn-danger" onClick={toggleModal}>
                Open
            </button>
            <Modal isOpen={modalOpen} toggle={toggleModal} />
        </div>
    );
}

export default App;
