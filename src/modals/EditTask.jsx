import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("Deadline: ");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDeadline(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDeadline(taskObj.Deadline);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Deadline"] = deadline;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update todo</ModalHeader>
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
          <select class="form-select" size="1">
            <option value="1">In progress</option>
            <option value="2">Not started</option>
            <option value="3">Done</option>
          </select>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
