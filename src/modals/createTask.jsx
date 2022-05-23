import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle }) => {
  const [taskName, taskSetName] = useState("");
  const [deadline, setDeadline] = useState("");

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add new todo</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
            ></input>
          </div>
          <div className="form-group">
            <label>Deadline</label>
            <input
              type="text"
              className="form-control"
              value={deadline}
            ></input>
          </div>
          <label>Status</label>
          <select class="form-select" size="1">
            <option value="1">In progress</option>
            <option value="2">Not started</option>
            <option value="3">Done</option>
          </select>
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

export default CreateTask;
