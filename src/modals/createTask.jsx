import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const createTask = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add new todo</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <input type="text"></input>
          </div>
          <div className="form-group">
            <input type="text"></input>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Add
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default createTask;
