import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("Deadline: ");

  const [status, setStatus] = useState("In progress");
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDeadline(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Deadline"] = deadline;
    taskObj["Status"] = status;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add new todo</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <div className="form-group" id="form-element">
          <input
            type="text"
            className="form-control"
            value={deadline}
            onChange={handleChange}
            name="deadline"
          />
        </div>
        <div id="form-element">
          <select
            class="form-select"
            size="1"
            value={status}
            onChange={handleStatusChange}
            name="status"
          >
            <option value="In progress">In progress</option>
            <option value="Not started">Not started</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleSave}>
          Add
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
