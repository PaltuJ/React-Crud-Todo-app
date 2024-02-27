import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditModal = ({ modal, toggle, updateTask, eleObj }) => {
  const [addTask, setAddTask] = useState("");
  const [addDescription, setAddDescription] = useState("");
  useEffect(() => {
    setAddTask(eleObj.taskName);
    setAddDescription(eleObj.description);
  }, []);

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

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["taskName"] = addTask;
    tempObj["description"] = addDescription;
    updateTask(tempObj);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Your Task</ModalHeader>
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
          <Button color="primary" onClick={handleUpdate}>
            Update Task
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;
