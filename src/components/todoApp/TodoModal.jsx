import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TodoModal = ({ modal, toggle, save }) => {
  const [addTask, setAddTask] = useState("");
  const [addDescription, setAddDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setAddTask(value);
      // console.log(addTask);
    } else {
      setAddDescription(value);
      // console.log(addDescription);
    }
  };
  const handleOnAdd = () => {
    let objTask = {};
    objTask["taskName"] = addTask;
    objTask["description"] = addDescription;
    save(objTask);
    setAddTask("");
    setAddDescription("");
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Your Task Here</ModalHeader>
        <ModalBody>
          <form>
            <div className=" form-grow">
              <label>Task Name</label>
              <input
                type="text"
                name="taskName"
                value={addTask}
                onChange={handleChange}
                className="form-control"
                placeholder="Add Task Here..."
                required
              />
            </div>
            <div>
              <label>Description</label>
              <textarea
                rows="5"
                name="description"
                onChange={handleChange}
                value={addDescription}
                className="form-control"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleOnAdd}>
            Add Task
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TodoModal;
