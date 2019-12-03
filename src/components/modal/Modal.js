import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalBox = ({ show, close,id, deleteDesign }) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure do you want to delete?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          No
        </Button>
        <Button variant="primary" onClick={() => deleteDesign(id)}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBox;
